const express = require("express");
const route = express.Router();

let validator = require("../validators/auth");

const Book = require("../schema/book");
const PurchaseBook = require("../schema/purchase");

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

route.get("/store/list-of-book", validator.validateToken, (req, res) => {
  Book.find({})
    .then(data => {
      return res.status(200).json({
        list: data,
        status: true
      });
    })
    .catch(error => res.status(400).send(error));
});

module.exports = route;
