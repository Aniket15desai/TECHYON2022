import express from "express";
import mongoose from "mongoose"
import bodyParser from "body-parser"
import router from "./routes/index.js";
import connectDB from '../server/config/db.js'

const app = express();

 //JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(router)

app.get("/", (req, res) => {
  res.send("I'm Working!!");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
