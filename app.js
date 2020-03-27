let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript"
];

// console.log(secretMessage.length)
//removing last string
secretMessage.pop();
// console.log(secretMessage.length)

//add 'to' 'Program' add the end
secretMessage.push("to", "Program");
//console.log(secretMessage)

//find 'easily' and replace with 'right'
const index = secretMessage.findIndex(arg => arg === "easily");
secretMessage.splice(index, 1, "right");
//or by accesing index and changing it:
// secretMessage[index] = 'right'
// console.log(secretMessage)

//remove first string of an array:
secretMessage.shift();
// console.log(secretMessage)

//add 'Programming' to the beginning of an array:
secretMessage.unshift("Programming");

//Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,.
const findIndex = ["get", "right", "the", "first", "time,"];
findIndex.forEach(item => {
  console.log(secretMessage.findIndex(arr => arr === item));
});

secretMessage.splice(6, 5, "know");

console.log(secretMessage);

const message = secretMessage.join(" ");
