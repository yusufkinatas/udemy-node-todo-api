const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/modals/todo");
const { ObjectID } = require("mongodb");

var id = "5c38d9341fd85e584d237d36";

// if (!ObjectID.isValid(id)) {
//   console.log("ID is not valid");
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("jej 1", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("jej 2", todo);
// }).catch(err => console.log(err));


// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log("id not found");
//   }
//   console.log("jej 3", todo);
// });

