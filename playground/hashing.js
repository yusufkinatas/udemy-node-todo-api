const jwt = require("jsonwebtoken");

var data = { id: 10 };

var token = jwt.sign(data, "123abc");
console.log(token);
var decoded = jwt.verify(token, "123abc")
console.log("decoded", decoded);

// const { SHA256 } = require("crypto-js");

// var message = "I am user number 3";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "somesecret").toString()
// };


// token.data.id = 5; //client manipulates the data
// token.hash = SHA256(JSON.stringify(data)).toString(); //client tries to create hash without same

// var resultHash = SHA256(JSON.stringify(token.data) + "somesecret").toString();
// if (resultHash === token.hash) {
//   console.log("Data was not changed");
// }
// else {
//   console.log("Data was changed. Do not trust!")
// }
