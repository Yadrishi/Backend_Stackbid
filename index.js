const { Console } = require("console");
var fs = require("fs");
var os = require("os");

var user = os.userInfo();
console.log(user);
console.log(user.username);

// fs.appendFile(
//   "hola.txt",
//   "HOLA! " + user.username + " \n" + user.uid + "     " + "HOW ARE YOU BUDDY?",
//   () => console.log("file has been created")
// );


// console.log(os);
// console.log(fs);