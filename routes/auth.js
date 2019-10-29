const express = require("express");
const route = express.Router();
const User = require("../schema/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/auth");

route.post("/create/user", (req, res) => {
  let { password, name, email } = req.body;
  if (!email) {
    return res.json({
      success: false,
      message: "Error: Email cannot be blank."
    });
  }
  if (!password) {
    return res.json({
      success: false,
      message: "Error: Password cannot be blank."
    });
  }
  email = email.toLowerCase();
  email = email.trim();
  User.find({ email: email })
    .then(previousUsers => {
      if (previousUsers.length > 0) {
        return res.status(401).json({
          success: false,
          message: "Error: Account already exist."
        });
      }
      const newUser = new User();
      newUser.name = name;
      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      newUser.save().then(user => {
        return res
          .status(200)
          .json({
            success: true,
            message: "Signed up Successful SignIn Now"
          })
          .catch(error => res.status(400).send(error));
      });
    })
    .catch(error => res.status(400).send(error));
});

route.post("/login", (req, res) => {
  let { email, password } = req.body;
  User.findOne({
    email: email
  })
    .then(data => {
      if (bcrypt.compareSync(password, data.password)) {
        let userToken = jwt.sign({ username: email }, config.secret_key, {
          expiresIn: "3h"
        });
        return res.status(200).json({
          message: "login successful",
          status: true,
          token: userToken
        });
      } else {
        return res.status(401).json({
          message: "please check your request data",
          status: false
        });
      }
    })
    .catch(error => res.status(400).send(error));
});

module.exports = route;
