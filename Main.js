import express from "express";
import mongoose from "mongoose";
import UserRoute  from './routes/user_route.js'
import Database from './Database/Database.js'

// save it in a variable
const app = express();
const cors = require("cors");
// port Number to listen
const port = 2810;

//the middle ware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// to display || the inetial state
app.get("/", (request, responce) => {
  responce.send("hello");
});

Database();

app.use('/user',UserRoute)

// to listen the app
app.listen(port, () => {
  console.log(`Server is running`);
  console.log(`http://localhost:${port}`);
});
