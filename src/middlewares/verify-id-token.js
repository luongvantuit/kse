const { request, response } = require("express");
const { firebaseAuth } = require("../services/firebase-auth");

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
    firebaseAuth
      .verifyIdToken(token)
      .then((decodeIdToken) => {
        if (decodeIdToken) {
          req.user = decodeIdToken;
          next();
        }
      })
      .catch((reason) => {
        res.status(401).send({
          error: true,
          msg: "Unauthorized! Token is Not Valid!",
          success: false,
          ...reason,
        });
      });
  }
}

module.exports = {
  verifyIdToken,
};
