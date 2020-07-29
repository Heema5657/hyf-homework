let volumeInMeters =800;
let houseCost = 2500000;
let gardenSizeInM2 =100;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let housey;
if(houseCost >= housePrice){
    housey = 'Peters House is Pricey';
}
else{
    housey = 'Peters House is not Pricey';
}
console.log(housey);
