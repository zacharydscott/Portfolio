
const { Server } = require('socket.io')

console.log(process.env.app_url)
const io = new Server(3000, {
	cors: {
		origin: process.env.app_url,
		method: ['GET','Post']
	}
})

const rooms = {};

function filterPlayers(players) {
	console.log(players)
	return players.map(player => {
		return {
			username: player.username,
			currentBid: player.currentBid
		}
	})
}

io.on("connection",socket => {
	console.log(socket.id)
	socket.on("join_room", (username, roomID, callBack) => {
		let room = rooms[roomID];
		if (!room) {
			room = [];
			rooms[roomID] = {players: [{username, id: socket.id,  currentBid: null}]};
		} else {
			room.players.push({username, id: socket.id, currentBid: null})
		}
		console.log(room)
		socket.listenersAny
		socket.join(roomID)
		socket.to(roomID).emit("player_joined", filterPlayers(room.players))
		callBack(filterPlayers(room.players))
	})
	socket.on('disconnect', () => {
		console.log('discnnect')
		for (let key of socket.rooms) {
			console.log(key)
			let players = rooms[key].players;
			let i = players.indexOf(p => p.id === socket.id)
			if (i) {
				players.splice(i,0);
			}
		}
	})
})
