const { request, response } = require("express");
const jwt = require('jsonwebtoken');
const { jwtSecretKey } = require("../config/server");

/**
 *
 * @param {request} req
 * @param {response} res
 * @param {*} next
 */
function verifyIdToken(req, res, next) {
  const authorization = req.headers["authorization"];
  const token = authorization.split(" ")[1];
  if (authorization.startsWith("Bearer") && token) {
    res.status(401).send({
      error: true,
      msg: "Unauthorized! Token Type Error or Token is Empty!",
      success: false,
    });
  } else {
    try {
      /**
      * @type {jwt.Jwt}
      */
      const resJwt = jwt.verify(token, jwtSecretKey)
      req.user = resJwt.payload;
      next()
    } catch (e) {
      res.status(401).send({
        error: true,
        msg: "Unauthorized! Token is not valid!",
        success: false
      })
    }
  }
}

module.exports = {
  verifyIdToken,
};
