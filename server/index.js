import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Creating express application
const app = express();

// To Read .env file
dotenv.config();

// Creating Connection with Database
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB");
    } catch (err) {
        throw (err);
    }
}

// Connect automatically after any issues || Optional 
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected");
});

// Creating a connection to Server
app.listen(8800, () => {
    connect();
    console.log("Connected to Server");
});