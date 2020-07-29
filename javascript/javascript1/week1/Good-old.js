let dogYearOfBirth = 2005;
let dogYearFuture = 2023;

let dogYear = dogYearFuture - dogYearOfBirth;
shouldShowResultInDogYears = false;
let humanYear = dogYear * 7;
let year;
if(shouldShowResultInDogYears){
    year = dogYear + " " + "dog years";
}
else{
    year = humanYear + " " + "human years";
}

console.log(" Your dog will be " + year + " " + "old in " + dogYearFuture + " " + ".");