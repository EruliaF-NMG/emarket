
import mongoose from 'mongoose';
import socketIO from "socket.io";
import http from "http";

import app from './bootstrap/express';
import {mongoDBUrl,port} from "./config/core";
import {addChat} from "./app/helpers/common/chatMessage";


// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(mongoDBUrl,{ useNewUrlParser: true });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoDBUrl}`)
});
mongoose.set('useCreateIndex', true);
//mongoose.set('debug', true);

const server = http.createServer(app);
//socket IO
const io = socketIO(server)
io.on('connection', socket => {
    
    console.log('User connected')
    
    socket.on('disconnect', () => {
      console.log('user disconnected')
    });

    socket.on('message', function(msg){
      addChat(msg,(error,responce)=>{
        if(!error){
          io.emit('receive_message', responce);
          console.log('message',responce);
        }
      });
      //io.emit('receive_message', responce);
    });
})

server.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})