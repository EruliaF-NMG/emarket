import app from './bootstrap/express';
import mongoose from 'mongoose';

import {mongoDBUrl,port} from "./config/core";

// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(mongoDBUrl,{ useNewUrlParser: true });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoDBUrl}`)
});
mongoose.set('useCreateIndex', true);
//mongoose.set('debug', true);

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})