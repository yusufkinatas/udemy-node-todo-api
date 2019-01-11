const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ? db.mlab : 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose }; 