const express = require("express");
const route = express.Router();

let validator = require("../validators/auth");

const Book = require("../schema/book");

route.post("/store/add-book", validator.validateToken, (req, res) => {
  let { title, price, description } = req.body;
  let newBook = new Book();
  newBook.title = title;
  newBook.price = Number(price);
  newBook.description = description;
  newBook
    .save()
    .then(data => {
      return res.status(201).json({
        status: true,
        message: "book store successfully"
      });
    })
    .catch(error => res.status(400).send(error));
});

module.exports = route;
