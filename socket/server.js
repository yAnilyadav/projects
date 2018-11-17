const express = require("express");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);

const io = socketio(server);
app.use("/", express.static(path.join(__dirname, "frontend")));
let usersockets = {};

io.on("connection", socket => {
  console.log("new socket formed from " + socket.id);
  socket.emit("connected");

  socket.on("login", data => {
    usersockets[data.user] = socket.id;
  });

  socket.on("send_msg", data => {
    if (data.message.startsWith("@")) {
      let receipient = data.message.split(":")[0].substr(1);
      let reciepientSocket = usersockets[receipient];
      io.to(reciepientSocket).emit("recv_msg", data);
    } else {
      socket.broadcast.emit("recv_msg", data);
    }
  });
});
server.listen(2345, () => console.log("server started"));

//this is a chat application to send messages to different users at a time that are connected together
//start the server from commandprompt by going to the folder
// type npm start
//now go to localhost:2345 (open more than 1 tabs and type localhost:2345 so that they are connectd together)
//now give them id and type the message.
//message will be sent to all the connected users.
