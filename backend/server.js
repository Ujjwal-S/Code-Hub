const express = require('express')
const http = require('http')
const {Server} = require('socket.io')
var bodyParser = require('body-parser')

const app = express()
const cors = require('cors')
app.use(
  cors({
    origin: "*",
  })
)

app.use(express.json());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


const server = http.createServer(app)

const io = require("socket.io")(server, {
	cors: {
	  origin: "*",
	}
});

const userSocketMap = {}
const userRoomMap = {}
const roomNameLanguageMap = {}

function getAllConnectedClients(roomName) {
	return Array.from(io.sockets.adapter.rooms.get(roomName) || []).map(socketId => {
		return {
			socketId,
			username: userSocketMap[socketId]
		}
	})
}

io.on('connection', (socket) => {
    console.log('socket connected', socket.id);
	
	socket.on("join", ({roomName, username, language}) => {
		userSocketMap[socket.id] = username
		userRoomMap[socket.id] = roomName
		if (language) {
			roomNameLanguageMap[roomName] = language
		}
		socket.join(roomName);   // upsert

		// notify other clients that a new user joined
		const clients = getAllConnectedClients(roomName);
		clients.forEach( ({socketId}) => {
			io.to(socketId).emit("joined", {
				clients,
				username,
				socketId: socket.id  // socket id of the new user that joined
			})
		})
	})

	socket.on('disconnect', () => {
		console.log("socket disconnected", socket.id);
		
		socket.in(userRoomMap[socket.id])?.emit("disconnected" , {
			socketId: socket.id,
			username: userSocketMap[socket.id],
		});

        delete userSocketMap[socket.id];
        delete userRoomMap[socket.id];
        socket.leave();
	})
})

app.post('/api/getRoomLanguage', (req, res) => {
	const {roomName} = req.body;
	res.json({
		roomLanguage: roomNameLanguageMap[roomName] || ""
	})
})

app.use('/api/compile', require('./compile'))

server.listen(3000, () => {
    console.log("Listening on Port 3000")
})