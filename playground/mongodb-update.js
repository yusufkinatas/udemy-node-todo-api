const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  db.collection("Users").findOneAndUpdate(
    { _id: new ObjectID("5c30adddff14484fc4ec2ceb") },
    {
      $set: { 
        name: "Yağız Akyüz"
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then(res => {
      console.log(res);
    })

  db.close();
});