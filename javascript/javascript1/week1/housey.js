const volumeInMeters =400;
const houseCost = 1000000;
const gardenSizeInM2 =70;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let housey;
if(houseCost >= housePrice){
    housey = 'Julias House is Pricey';
}
else{
    housey = 'Julias House is not Pricey';
}
console.log(housey);
