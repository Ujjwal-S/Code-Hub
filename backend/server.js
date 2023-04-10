const express = require('express')
const http = require('http')
const {Server} = require('socket.io')

const app = express()
const cors = require('cors')
app.use(
  cors({
    origin: "*",
  })
)

const server = http.createServer(app)

const io = require("socket.io")(server, {
	cors: {
	  origin: "*",
	}
});

const userSocketMap = {}
const userRoomMap = {}

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
	
	socket.on("join", ({roomName, username}) => {
		userSocketMap[socket.id] = username
		userRoomMap[socket.id] = roomName
		socket.join(roomName);   // upsert

		console.log("USER JOINED ROOM ->", roomName)

		// notify other clients that a new user joined
		const clients = getAllConnectedClients(roomName);
		console.log("YEH RAHE CLIENTS->")
		clients.forEach(client => console.log(client))
		console.log('---------------------------')
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



server.listen(3000, () => {
    console.log("Listening on Port 3000")
})