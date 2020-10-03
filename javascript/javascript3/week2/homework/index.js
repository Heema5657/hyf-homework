// Movies Exercise
fetch(
  `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      if (element.rating <= 4 && element.year >= 2000) {
        console.log(element);
      }
    });
  });

//Promises that resolve after set Time
function returnspromise(resolveAfter) {
  return new Promise((resolve, reject) => {
    if (typeof resolveAfter == "number") {
      setTimeout(() => {
        resolve(console.log("I am called asynchronously"));
      }, resolveAfter * 1000);
    } else {
      reject(console.log("it is not a number"));
    }
  });
}

returnspromise(2);
// with Async await function

async function returnPromise(resolveAfter) {
  let promise = new Promise((resolve, reject) => {
    if (typeof resolveAfter == "number") {
      setTimeout(() => {
        resolve("I am called asynchronously");
      }, resolveAfter * 1000);
    } else {
      reject("it is not a number");
    }
  });
  let result = await promise;
  console.log(`Output : ${result}`);
}

returnPromise(3);

// Rewrite time

function getPromise(aftertime) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("called after 4 seconds"));
      getLocation();
    }, aftertime * 1000);
  });
  function getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        resolve(`${navigator.geolocation.getCurrentPosition(showPosition)}`);
      } else {
        reject("Geolocation is not supported by this browser.");
      }
    });
  }
}

getPromise(4);

function showPosition(position) {
  console.log(
    "Latitude: " +
      position.coords.latitude +
      "\n Longitude: " +
      position.coords.longitude
  );
}

// Fetching and waiting
// Do the 3 steps below using promises and .then.

// The 3 steps:

// Wait 3 seconds
// After 3 seconds fetch some data from any api you like
// Log out the data from the api

function getMovies() {
  fetch(
    `https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`
  )
    .then((resp) => resp.json())
    .then((data) => console.log(data));
}

function afterSeconds3(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getMovies());
      console.log("came at 3 seconds");
    }, time * 1000);
  });
}

afterSeconds3(3);

// Do the 3 steps below using async/await :

async function getOtherMovies(seconds) {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(getMovies());
      console.log("came at 5 seconds");
    }, seconds * 1000);
  });
  let result = await promise;
  return result;
}
getOtherMovies(5);
