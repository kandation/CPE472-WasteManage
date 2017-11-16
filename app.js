var admin = require("firebase-admin");


admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "smartbin-d27c3",
      clientEmail: "test1-23@smartbin-d27c3.iam.gserviceaccount.com",
      privateKey: "AIzaSyAe70VQ4GJFzdybjHh0rTY2AnAYHKO38A0"
    }),
    databaseURL: "https://smartbin-d27c3.firebaseio.com"
  });

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("/");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});