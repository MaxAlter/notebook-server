const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const CommentRoutes = require("./CommentRoutes");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const BASE_URL_BD = process.env.BASE_URL_BD;

class Server {
  constructor() {
    this.server = null;
  }
  initMiddlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }
  initServer() {
    this.server = express();
  }

  initRoutes() {
    this.server.use("/api", CommentRoutes);
  }

  startListening() {
    this.server.listen(PORT, () => {
      console.log("Server started listening on port", PORT);
    });
  }

  async initDataBase() {
    try {
      await mongoose.connect(BASE_URL_BD, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connection successful");
    } catch (error) {
      console.log("Connecting error:", error.message);
      process.exit(1);
    }
  }
  async start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    this.startListening();
    await this.initDataBase();
  }
}

module.exports = new Server();
