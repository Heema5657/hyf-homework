const volumeInMeters =800;
const houseCost = 2500000;
const gardenSizeInM2 =100;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let housey;
if(houseCost >= housePrice){
    housey = 'Peters House is Pricey';
}
else{
    housey = 'Peters House is not Pricey';
}
console.log(housey);
