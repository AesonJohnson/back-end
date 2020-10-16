const express = require("express");
const server = express();

const db = require("../data/dbConfig.js");

const authRouter = require("../routers/auth/auth-router.js");
const usersRouter = require("../routers/users/users-router.js");
const plantsRouter = require("../routers/plants/plants-router.js");


server.use(express.json());
server.use("/api/auth", authRouter);
server.use("/api/users", authenticate, usersRouter);
server.use("/api/plants", authenticate, plantsRouter);

module.exports = server;
