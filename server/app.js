import express from "express";
import bodyParser from "body-parser"
import connectDB from "./config/db.js";
import router from "./routes/index.js"; 

const app = express();

// JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(router);

app.get("/", (req, res) => {
  res.send("I'm Working!!");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
