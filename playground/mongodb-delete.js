const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  //deleteMany
  //Bulduğu bütün verileri siler
  // db.collection("Todos").deleteMany({ text: "Something to do" })
  //   .then(res => {
  //     console.log(res.result);
  //   });

  //deleteOne
  //Bulduğu verilerden ilkini siler
  // db.collection("Todos").deleteOne({ text: "Jej" })
  //   .then(res => {
  //     console.log(res.result);
  //   });

  //findOneAndDelete  
  // db.collection("Todos").findOneAndDelete({completed: true})
  //   .then(res => {
  //     console.log("Deleted object:", res);
  //   })


  db.close();
});