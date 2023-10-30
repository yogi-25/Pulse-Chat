const express = require("express");
const chat = require("./data/data");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db")
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const userRoutes = require("./routes/userRoutes")
const chatRoutes = require("./routes/chatRoutes")

dotenv.config();
// ADD THIS

connectDB();
var app = express();

var cors = require('cors');
app.use(cors());
app.use(express.json());
// app.get("/ab",(req,res)=>
// {
//     res.send(chat);
// })
// app.get("/chat",(req,res)=>
// {
//     res.send(chat);
//      //console.log(chat);
// })
app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT,console.log(`server is running ${PORT}`.yellow.bold))
