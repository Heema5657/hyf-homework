//Write a function that finds the shortest word of an array of words
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const lengthOfArray = danishWords.length;
let firstValue = danishWords[0];
let shortestWord;
function shortestWords(danishWords) {
  for (let i = 0; i < lengthOfArray; i++) {
    let arraysIndexLen = danishWords[i].length;
    console.log(arraysIndexLen);
    if (arraysIndexLen <= firstValue.length) {
      shortestWord = danishWords[i];
    }
  }
  return shortestWord;
}

console.log(shortestWords(danishWords));

//Find the individual number and the total number of Danish letters in a string.
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
let count = 0;
let countå = 0;
let countø = 0;
let countæ = 0;
function individualChar(danishString) {
  for (let i = 0; i < danishString.length; i++) {
    let stringsIndex = danishString[i];
    console.log(stringsIndex);
    if (stringsIndex.includes("å")) {
      console.log(stringsIndex);
      count++;
      countå++;
      console.log(count);
      console.log(countå);
    } else if (stringsIndex.includes("ø")) {
      console.log(stringsIndex);
      count++;
      countø++;
      console.log(count);
      console.log(countø);
    } else if (stringsIndex.includes("æ")) {
      console.log(stringsIndex);
      count++;
      countæ++;
      console.log(count);
      console.log(countæ);
    }
  }
  let output = {
    total: count,
    å: countå,
    ø: countø,
    æ: countæ,
  };
  return output;
}

console.log(individualChar(danishString2));

//Spirit animal
//Create an input element, a button and a tag to display the spirit animal into.
let body = document.querySelector("body");
let input = document.createElement("input");
let btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME";
body.appendChild(btn);
let outputValue;
let random;
let spiritAnimalString;
input.setAttribute("type", "text");
input.setAttribute("id", "name");
input.setAttribute("value", "type your name");
body.appendChild(input);
btn.addEventListener("click", function () {
  let outputValue = document.getElementById("name").value;
  let spiritAnimalString = [
    "butterfly",
    "owl",
    "frogs",
    "spider",
    "cougar",
    "blue jay",
    "herons",
    "chameleons",
    "falcon",
    "hummingbird",
  ];
  let random = Math.floor(Math.random() * spiritAnimalString.length);
  let div = document.createElement("div");
  div.innerText = `${outputValue} - ${spiritAnimalString[random]}`;
  body.appendChild(div);
  if (outputValue == "") {
    div.innerText = "empty: please enter a name";
  }
});
