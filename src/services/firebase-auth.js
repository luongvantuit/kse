const { Auth } = require("firebase-admin/lib/auth/auth");
const { admin } = require("./firebase");

/**
 * @type {Auth}
 */
const firebaseAuth = admin.auth;

module.exports = {
  firebaseAuth,
};
