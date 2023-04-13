import express from "express";
import morgan from "morgan";
import { Server as SocketServer} from "socket.io";
import http from "http"
import cors from "cors";
import {PORT} from "./config.js";



const app= express();//creamos una contante de express
const sever=http.createServer(app);
new SocketServer(server);

app.use(cors());//cualquier servidor  que se ejecute en otro puerto se puede conectar
app.use(morgan("dev"));//imprime las peticiones en consola


app.listen(PORT);// decimos que se va a ejecutar en el puesto 3001
console.log("Server started in the port"+PORT);