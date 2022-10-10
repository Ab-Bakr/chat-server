import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import {
  AuthRoute,
  ChatRoute,
  MessageRoute,
  PostRoute,
  UserRoute,
} from "./Routes/index.js";

//Routes

const app = express();
//Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 4000;

const CONNECTION = process.env.MONGODB_CONNECTION;

mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Server is running on ${PORT}`)
    )
  )
  .catch((error) => console.log(error));

//use of routes

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/chat", ChatRoute);
app.use("/message", MessageRoute);
