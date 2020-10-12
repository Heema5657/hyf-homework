// Doubling a number
let numbers = [1, 2, 3, 4];
let newNumbers = numbers
  .filter((element) => element % 2 !== 0)
  .map((article) => article * 2);
console.log("The doubled numbers are", newNumbers);

const movies = [
  {
    title: "'A' gai wak",
    year: 1983,
    rating: 7.4,
    votes: 11942,
    running_times: 6300,
  },
  {
    title: "'Breaker' Morant",
    year: 1980,
    rating: 7.9,
    votes: 10702,
    running_times: 6420,
  },
  {
    title: "'Crocodile' Dundee II",
    year: 1988,
    rating: 5.5,
    votes: 47180,
    running_times: 6480,
  },
  {
    title: "(500) Days of Summer",
    year: 2009,
    rating: 7.7,
    votes: 412368,
    running_times: 5700,
  },
  {
    title: "*batteries not included",
    year: 1987,
    rating: 6.6,
    votes: 25636,
    running_times: 6360,
  },
];
// 1 - the movies with a short title
let arrayOfShortMoviesTitle = movies.map((shortTitle) => shortTitle.title);
// 3 the number of movies made between 1980-1989
let arrayOfMoviesInYear = movies.map((title) => title.year);
// 2 - the movies with a long title
let arrayOfLongMoviesTitle = movies
  .map((longTitle) => longTitle.title)
  .filter((movieTitle) => {
    if (movieTitle.length > 8) {
      console.log(arrayOfLongMoviesTitle);
    } else if (movieTitle.length < 8) {
      console.log(arrayOfShortMoviesTitle);
    } else if ((movieTitle >= 1980 && movieTitle <= 1989).length) {
      console.log(arrayOfMoviesInYear);
    }
  });

// 4 the extra key called tag
const newM = movies.filter((movie) => {
  if (movie.rating >= 7) {
    movie["tag"] = "Good";
  } else if (movie.rating >= 4 && movie.rating < 7) {
    movie["tag"] = "Average";
  } else {
    movie["tag"] = "Bad";
  }
  return movie;
});
console.log(newM);

//the movies array to only the rating of the movies.
const moviesRated6 = movies
  .filter((ratedmovies) => ratedmovies.rating > 6)
  .map((moviesRatings) => moviesRatings.rating);
console.log(moviesRated6);
// Count the total number of movies containing any of following keywords:
const totalMoviesOfWords = movies.filter((moviesTitled) => {
  if (moviesTitled.title.toLowerCase().includes("surfer")) {
    return moviesTitled;
  } else if (moviesTitled.title.toLowerCase().includes("alien")) {
    return moviesTitled;
  } else if (moviesTitled.title.toLowerCase().includes("benjamin")) {
    return moviesTitled;
  }
}).length;
console.log(totalMoviesOfWords);
//Create an array of movies where a word in the title is duplicated.

let wordsSeparate = movies.map((movie) => {
  const words = movie.title.toLowerCase().replace(/["']/g, "").split(" ");
  let objectOfDuplicate = {};
  let duplicateFound = false;
  words.forEach((word) => {
    if (word in objectOfDuplicate) {
      duplicateFound = true;
      objectOfDuplicate[word] = true;
    } else {
      objectOfDuplicate[word] = false;
    }
  });
  return objectOfDuplicate;
});

console.log(wordsSeparate);
