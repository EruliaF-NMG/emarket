import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compress from 'compression'
import cors from 'cors';
import helmet from 'helmet';
import passport from "passport";
//import multer from "multer";

import devBundle from './devBundle';
import template from '../../template';
require('../app/helpers/auth/auth');

import authRoutes from "../app/routes/auth.routes";
import userRoutes from "../app/routes/user.routes";
import shopRoutes from "../app/routes/shop.routes";

const CURRENT_WORKING_DIR = process.cwd()
const app = express()
devBundle.compile(app)

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())
//passport init
app.use(passport.initialize());

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// mount routes
app.use('/api',authRoutes)
app.use('/api',userRoutes)
app.use('/api',shopRoutes)
//Front-end
app.get('*', (req, res) => {
    res.status(200).send(template())
})

export default app;