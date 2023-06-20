const router = require('express').Router();
const fs = require("fs");
const { exec } = require("child_process");
const path = require('path');
const Docker = require('dockerode');
const docker = new Docker();

router.post('/', async (req, res) => {
    const {language, code, input} = req.body

    try {
        // Create a directory
        const dateStr = getDate();
        let dir = path.join(__dirname, 'code_volume', language, dateStr)
        await mkdirIfNotExists(dir)      // __dirname/code_volume/lang/<date>

        const random = Math.floor(Math.random()*10000000000);
        dir = path.join(dir, `${random}`);  // __dirname/code_volume/lang/<date>/<random>/
        await mkdirIfNotExists(dir)

        const codeFilePath = path.join(dir, `${'code' + getFileExtention(language)}`);
        const inputFilePath = path.join(dir, 'input.txt');

        fs.writeFileSync(codeFilePath, code)
        fs.writeFileSync(inputFilePath, input)

        // Create Docker Container
        const containerConf = {
            AttachStdin: true,
            AttachStdout: true,
            AttachStderr: true,
            Tty: true,
        }
        const container = await docker.createContainer({
            Image: getImage(language),
            HostConfig: {
                Binds: [
                    `${dir}:/run`
                ]
            },
            ...containerConf
        })

        await container.start();

        container.exec({
            Cmd: ['/bin/bash', '-c', getRunCommand(language)],
            ...containerConf,
        }, (err, exec) => {
            if (err) {
                return res.json({error: true})
            }
            
            exec.start({}, (err, stream) => {
                if (err) {
                    return res.json({error: true})
                }
                
                let output = '';
                stream.on('data', (chunk) => {
                    output += chunk
                })
                
                stream.on('end', async () => {
                    output = output.replace(/[^\x20-\x7E\n\r]/g, '');
					res.json({ error: false, output });
					container.inspect((err, data) => {
						if (err) {
							console.error('Error while inspecting container:', err);
							return;
						}
						stopContainer(data.Id)
					})
                })
            })
        })
    }catch(e) {
        console.log(e)
        return res.json({error: true})
    }
})

function getImage(language) {
    if (language === "python") return 'python_3.10_image'
    if (language === "cpp") return 'cpp_image'
}

function getRunCommand(language) {
    if (language === "python") return 'python run/code.py < run/input.txt';
    if (language === "cpp") return 'g++ run/code.cpp -o run/executable && ./run/executable < ./run/input.txt';
}

function stopContainer(containerId) {
	const dockerInstance = new Docker();
	const container = dockerInstance.getContainer(containerId);
	container.stop((err) => {
		// Stop the container
			if (err) {
				console.error('Error while stopping container:', err);
				return;
			}
		
			// Remove the container
			container.remove({ force: true }, (err) => {
			if (err) {
				console.error('Error while removing container:', err);
				return;
			}
		})
	})
}

function getDate() {
    const currDate = Date.now();
    const date = new Date(currDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
}

function getFileExtention(language) {
    if (language === "python") return '.py' 
    else if (language === "cpp") return '.cpp'
}

function mkdirIfNotExists(dir) {
    return new Promise((resolve, reject) => {
        try {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
            return resolve();
        } catch(e) {
            return reject();
        }
    })
}


module.exports = router;