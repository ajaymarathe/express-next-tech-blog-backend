// config/firebaseAdmin.js
const admin = require("firebase-admin");
const serviceAccount = require("../next-tech-blog-5223e-firebase-adminsdk-fbsvc-3ed19ae412.json"); // replace with your file name

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
