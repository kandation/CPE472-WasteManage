import pyrebase

config = {
  "apiKey": "AIzaSyAe70VQ4GJFzdybjHh0rTY2AnAYHKO38A0",
  "authDomain": "smartbin-d27c3.firebaseapp.com",
  "databaseURL": "https://smartbin-d27c3.firebaseio.com",
  "storageBucket": "smartbin-d27c3.appspot.com"
}

firebase = pyrebase.initialize_app(config)
print(555)
db = firebase.database().child('Nodelist').get()
print(db.val())