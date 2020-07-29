let firstWords =["easy","complicated","strong","boring","hard","interesting","good","bad","bold","italics","regular"];
let secondWords =["red","blue","green","yellow","black","white","violet","indigo","airplane","telephone",];

let startupName;
startupName = firstWords[Math.floor(Math.random() * 10)] + " " + secondWords[Math.floor(Math.random() * 10)],

console.log(" The Startup: " + startupName + " " + "contains" + " " + startupName.length + " " + "characters");