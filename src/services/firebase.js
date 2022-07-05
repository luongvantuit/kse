const admin = require("firebase-admin");
const { join } = require("path");

const serviceAccount = require(join(process.cwd(), "firebase-admin-sdk.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = {
  admin,
};
