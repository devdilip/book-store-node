const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    require: true
  },
  description: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  availability: {
    type: Boolean,
    default: true
  },
  creationDate: {
    type: Date,
    default: Date.now()
  }
});
module.exports = mongoose.model("Book", BookSchema);
