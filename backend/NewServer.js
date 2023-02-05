//configurations
var env = process.env.NODE_ENV || "development";
if (env === "development") process.env.PORT = 3000;

import http from 'http';
import cors from 'cors';
import express from 'express';

var app = express();
var port = process.env.PORT;

var server = http.createServer(app);
server.listen(port);

app.use(cors());
app.use(express.json());


// ---- import routers here -----
import userRouter from './Routers/User.js';
import projectRouter from './Routers/Project.js';

// routers
app.use(userRouter);
app.use(projectRouter);

console.log("http server listening on %d", port)