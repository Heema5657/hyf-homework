//Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

function eventOut() {
  setTimeout(function () {
    const paragraphSpace = document.getElementById("class");
    paragraphSpace.innerHTML = "Called after 2.5 seconds";
  }, 2500);
}
window.addEventListener("load", eventOut); //on the page load

//Calling this function should log out the stringToLog after delay seconds.
//Call the function you have created with some different arguments.
window.addEventListener("load", logOutString);
function logOutString(delay, stringToLog) {
  const num = delay * 1000;
  setTimeout(function () {
    const paragraphSpace = document.getElementById("class1");
    paragraphSpace.innerHTML = `${delay}, ${stringToLog}`;
    //window.alert(`${delay}, ${stringToLog}`);
  }, num);
}
logOutString(5, "The String Logged after 5 seconds");
logOutString(3, "The String Logged after 3 seconds");

//Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.
const newButton = document.getElementById("first"); // add function above
newButton.addEventListener("click", eventOut1);

function eventOut1() {
  setTimeout(function () {
    const paragraphSpace = document.getElementById("class2");
    paragraphSpace.innerHTML = "Called after 2.5 seconds";
  }, 2500);
}
// Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn.

const earthLog = () => {
  console.log("Earth");
};
const saturnLog = () => {
  console.log("Saturn");
};

function planetLog(planetLogFunc) {
  planetLogFunc();
}
planetLog(earthLog);
planetLog(saturnLog);

//Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out

const locationLogButton = document.getElementById("loca");
const displayLoca = document.getElementById("displayLoca");
locationLogButton.addEventListener("click", displayLatLon);

function displayLatLon() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    displayLoca.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  displayLoca.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

// Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function.
//Try and call this function with different delays and different callback functions

window.addEventListener("load", runAfterDelay);
function runAfterDelay(delays, seeString) {
  let delaysIn = delays * 1000;
  setTimeout(seeString, delaysIn);
}
// runAfterDelay(4, function seeString() {
//   console.log("Should be logged after 4 seconds");
// });

//Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds.
//If a double click has been detected, log out the text: "double click!"

const space = document.getElementById("headsup");
space.addEventListener("click", doubleClick, true);
let clickedOnce = new Date().getMilliseconds();
function doubleClick() {
  let clickTwice = new Date().getMilliseconds();
  let totalTime = clickedOnce + clickTwice;
  if (totalTime > 0.5) {
    console.log("double clicked");
  }
}

//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function.
//If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke == true) {
    logFunnyJoke();
  } else if (shouldTellFunnyJoke == false) {
    logBadJoke();
  } else {
    let returnAnswer = document.getElementById("joke");
    returnAnswer.innerText = `enter a 'true' or 'false'.`;
  }
}
function logFunnyJoke() {
  let funJoke = document.getElementById("joke");
  funJoke.innerText =
    "He : What did the zero say to the 8? \n she : Looks like your belt is too tight.";
}
function logBadJoke() {
  let badJoke = document.getElementById("joke2");
  badJoke.innerText =
    "He : What did the science book say to the math book? \n she : Wow you got problems.";
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);

//Function as a variable
//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

let functionsArray = [
  function x() {
    let a = "hi";
    return a;
  },
  function y() {
    let b = "how are you ?";
    console.log(b);
  },
  function z() {
    let c = "I am fine";
    console.log(c);
    return c;
  },
];

let newFunctionsArray = functionsArray.forEach((f) => console.log(f())); // bound to each function

const randomfunction = function random() {
  console.log("you are random");
};
function watever() {
  console.log("its awful in the console.");
}

console.log(randomfunction, watever());

const character = {
  name: "joker",
  speech: (newSaying) => {
    console.log("I am a funny character.");
  },
};

console.log(character.speech());

//the fastest presser in the realm
let container = document.getElementById("inputText");
let input = document.createElement("input");
let buttonPress = document.createElement("button");
const showFirstCounter = document.createElement("div");
const showSecondCounter = document.createElement("div");
const result = document.createElement("div");
buttonPress.innerText = "Start Game";
input.type = "number";
input.setAttribute("max", "99");
input.id = "userData";
container.appendChild(input);
let br = document.createElement("br");
container.appendChild(br);
container.appendChild(buttonPress);
let br1 = document.createElement("br");
buttonPress.appendChild(br1);
buttonPress.addEventListener("click", userInput);
container.appendChild(showFirstCounter);
container.appendChild(showSecondCounter);
container.appendChild(result);
function userInput() {
  let counter1 = 0;
  let counter2 = 0;
  const userData = document.getElementById("userData").value * 1000;
  document.addEventListener("keypress", pressKey);
  function pressKey(e) {
    if (e.key === "l") {
      counter1 + 1;
      showFirstCounter.innerHTML = `<div>${counter1++}</div>`;
    } else if (e.key === "s") {
      counter2 + 1;
      showSecondCounter.innerHTML = `<div>${counter2++}</div>`;
    } else {
      console.log("Wrong input");
    }
  }
  setTimeout(() => {
    document.removeEventListener("keypress", pressKey);
    console.log(counter1);
    console.log(counter2);
    if (counter1 > counter2) {
      result.innerHTML = `<div>The player pressing key l WINS</div>`;
    } else if (counter2 > counter1) {
      result.innerHTML = `<div>The player pressing key s WINS</div>`;
    } else {
      result.innerHTML = `<div>Its a Tie</div>`;
    }
    return result;
  }, userData);
  showFirstCounter.innerHTML = "";
  showSecondCounter.innerHTML = "";
  result.innerHTML = "";
}
