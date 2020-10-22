const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const db = require("../data/dbConfig.js");

const authRouter = require("../routers/auth/auth-router.js");
const plantsRouter = require("../routers/plants/plants-router.js");

const server = express();

server.use(express.json());
server.use("/api/auth", authRouter);
server.use("/api/plants", authenticate, plantsRouter);

module.exports = server;
