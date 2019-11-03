const jwt = require("jsonwebtoken");
let authConfig = require("../config/auth");

let validateToken = (request, response, next) => {
  let token = request.headers["authorization"];
  if (token && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, authConfig.secret_key, (err, decode) => {
      if (err) {
        response.json({
          message: "token not valid",
          status: false
        });
      } else {
        request.decode = decode;
        next();
      }
    });
  } else {
    response.json({
      message: "token is missing",
      status: false
    });
  }
};

module.exports = {
  validateToken: validateToken
};
