const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../users/users-model.js");
const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../config/secrets.js");

router.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
  
    user.password = hash;
  
    User.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
    .catch(error => {
      res.status(500).json(error);
    })
  });
  
  router.post("/login", (req, res) => {
    let { username, password } = req.body;
  
    User.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({ message: `Hello ${user.username}`, token});
        } else {
          res.status(401).json({ message: "Invalid request" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      })
  });
  
  function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
      lat: Date.now()
    }
    const options = {
      expiresIn: "1h"
    }
    return jwt.sign(payload, jwtSecret, options);
  }
  
  module.exports = router;
  