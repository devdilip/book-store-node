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

route.get("/store/purchase/books", validator.validateToken, (req, res) => {
  let { book_id, email } = req.query;
  Book.find({ _id: book_id })
    .then(data => {
      if (data.length === 0) {
        return res.status(200).json({
          status: false,
          message: "book is not available"
        });
      } else {
        let newPurchase = new PurchaseBook();
        newPurchase.userEmail = email;
        newPurchase.book_id = data[0]._id;
        newPurchase
          .save()
          .then(status => {
            return res.status(200).json({
              status: true,
              message: "successful! Book purchase"
            });
          })
          .catch(error => res.status(400).send(error));
      }
    })
    .catch(error => res.status(400).send(error));
});

module.exports = route;
