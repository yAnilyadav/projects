const express = require("express");
const server = express();
const todoroute = require("./routes/todos");
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/public", express.static(__dirname + "/public"));
server.use("/todos", todoroute);

server.listen(2345, console.log("server has started"));
//to start the server go to localhost:2345/public/todolist.html
//add the list by items
