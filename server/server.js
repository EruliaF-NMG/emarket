import mongoose from "mongoose";
import socketIO from "socket.io";
import http from "http";
import _ from "lodash";

import app from "./bootstrap/express";
import { mongoDBUrl, port } from "./config/core";
import { addChat } from "./app/helpers/common/chatMessage";

// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(mongoDBUrl, { useNewUrlParser: true });
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoDBUrl}`);
});
mongoose.set("useCreateIndex", true);
//mongoose.set('debug', true);

const server = http.createServer(app);
//socket IO
const io = socketIO(server);

var clients =[];
io.on("connection", socket => {

  socket.on("clientKey",(data) =>{
    let clientInfo = new Object();
    clientInfo.customId = data.customId;
    clientInfo.clientId = socket.id;
    clients.push(clientInfo);
    console.log("connection",clients)
  });

  socket.on("disconnect", () => {
    for(let i in clients){
      if(clients[i]['clientId'] == socket.id){
          clients.splice(i,1);
          break;
      }
    }
    console.log("disconnect",clients)
  });

  socket.on('forceDisconnect', function(id){
    socket.disconnect();
  });

  socket.on("message", function(msg) {
    addChat(msg, (error, responce,sender,receiver) => {
      if (!error) {
        
        for (let i in clients){
          
          if(clients[i]["customId"]==sender){
            io.to(clients[i]["clientId"]).emit("receive_message", responce);
          }else if(clients[i]["customId"]==receiver){
            io.to(clients[i]["clientId"]).emit("receive_message", responce);            
          }

        }    
        
      }
    });
  });

});

server.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});
