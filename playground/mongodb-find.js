const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  db.collection("Users").find({ name: "Yusuf" }).toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    })

  // db.collection("Users").find().count()
  // .then(count => {
  //   console.log("res:", count);
  // })
  // .catch(err => {

  // })

  db.close();
});