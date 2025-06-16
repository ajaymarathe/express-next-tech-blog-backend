const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_ADMIN_BASE64, "base64").toString("utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
