const mongoose = require("mongoose");
const databaseCrediential = require("./databaseCrediential");
const DATABASE_URI = databaseCrediential.DATABASE_URI;

const connect = () => {
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === "test") {
      const Mockgoose = require("mockgoose").Mockgoose;
      const mockgoose = new Mockgoose(mongoose);

      mockgoose.prepareStorage().then(() => {
        mongoose
          .connect(DATABASE_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
          .then((res, err) => {
            if (err) return reject(err);
            resolve();
          });
      });
    } else {
      mongoose
        .connect(DATABASE_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
        .then((res, err) => {
          if (err) return reject(err);
          resolve();
        });
    }
  });
};

const close = () => {
  return mongoose.disconnect();
};

module.exports = { connect, close };
