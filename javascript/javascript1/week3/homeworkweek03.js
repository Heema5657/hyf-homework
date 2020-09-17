const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
//const nameToRemove = "Ahmad";
// Write some code here

function namesToremove(input) {
  let wordremoved;
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    if (input == names[i]) {
      wordremoved = names.splice(names[i], 1);
    }
  }
  return names;
}

console.log(namesToremove("Peter"));
// Code done

console.log(names);
// Exercise 2
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function getTravelTime(travelInformation) {
  const travelTime =
    travelInformation.destinationDistance / travelInformation.speed;
  const travelHours = parseInt(Number(travelTime));
  const travelMin = Math.round((Number(travelTime) - travelHours) * 60);
  return `${travelHours} hours and ${travelMin} minutes`;
}
const travelTime = getTravelTime(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes

//Exercise 3
const seriesDurations = [
  {
    title: "Homeland season 8",
    days: 3,
    hours: 16,
    minutes: 0,
  },
  {
    title: "Breathe",
    days: 3,
    hours: 22,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];
function logOutSeriesText() {
  // write code here
  const noOfYearsInHours = 80 * 365 * 24;
  let totalOfTime = 0;
  const len = seriesDurations.length;
  for (let i = 0; i < len; i++) {
    const daysInHours = seriesDurations[i].days * 24;
    const hours = seriesDurations[i].hours;
    const titleOfSeries = seriesDurations[i].title;
    const totalPercentage = ((daysInHours + hours) / noOfYearsInHours) * 100;
    totalOfTime += totalPercentage;
    console.log(
      `${titleOfSeries} took ${totalPercentage.toFixed(3)}% of my life`
    );
  }
  console.log(`In total this is ${totalOfTime.toFixed(3)}% of my life`);
}
logOutSeriesText();

//Exercise 4
let notes = [];
console.log(notes);
function saveNote(content, id) {
  if (typeof content === "string" && !isNaN(id)) {
    let obj = {};
    obj["content"] = content;
    obj["id"] = id;
    console.log(obj);
    notes.push(obj);
  } else {
    return "Please enter a string and an a number";
  }
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

// [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//Exercise 5

function getNote(id) {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    if (!isNaN(id) && notes[i].id === id) {
      return notes[i];
    } else {
      return "error id not found";
    }
  }
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
//Exercise 6
//Now a user can both save and get a note. What if the user just wants to read all his notes?
//Lets also create that functionality: Create a function logOutNotesFormatted.
//When calling the function it should log this string out for every note: "The note with id: 1, has the following note text: "some example note"."
function logOutNotesFormatted() {
  // your code here
  console.log(notes);
  for (let i = 0; i < notes.length; i++) {
    let stringIdNotes = notes[i].id;
    let stringContNotes = notes[i].content;

    console.log(
      `"The note with id: ${stringIdNotes} , has the following note text: ${stringContNotes}."`
    );
  }
}

logOutNotesFormatted();
