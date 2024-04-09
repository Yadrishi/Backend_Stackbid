var prompt = require("prompt-sync")();
const age = prompt("please enter your age");
if (age > 18) {
  console.log("yayy");
} else {
  console.log("alright");
}
