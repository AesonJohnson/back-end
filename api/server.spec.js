const request = require("supertest");
const server = require("./server");
const db = require ("../database/dbConfig.js");
const testUser = { username : "testing", password: "testing" }