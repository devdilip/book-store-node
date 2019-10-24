const mongoose = require("mongoose");

const BookPurchaseSchema = new mongoose.Schema({
  book_id: {
    type: String,
    trim: true,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    trim: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now()
  }
});
module.exports = mongoose.model("PurchaseBook", BookPurchaseSchema);
