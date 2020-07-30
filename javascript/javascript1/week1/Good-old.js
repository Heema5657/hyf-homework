const dogYearOfBirth = 2005;
const dogYearFuture = 2023;

const dogYear = dogYearFuture - dogYearOfBirth;
shouldShowResultInDogYears = false;
const humanYear = dogYear * 7;
let year;
if(shouldShowResultInDogYears){
    year = dogYear + " " + "dog years";
}
else{
    year = humanYear + " " + "human years";
}

console.log(" Your dog will be " + year + " " + "old in " + dogYearFuture + " " + ".");
