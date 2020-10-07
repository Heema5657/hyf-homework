const body = document.querySelector("main");
const inputText = document.createElement("input");
inputText.type = "text";
inputText.placeholder = "search a giphy of";
body.appendChild(inputText);
const br = document.createElement("br");
body.appendChild(br);
const br1 = document.createElement("br");
body.appendChild(br1);
const inputNumber = document.createElement("input");
inputNumber.type = "number";
inputNumber.placeholder = "insert a number";
body.appendChild(inputNumber);
const br2 = document.createElement("br");
body.appendChild(br2);
const br3 = document.createElement("br");
body.appendChild(br3);
const button = document.createElement("button");
button.innerText = "search";
body.appendChild(button);
const display = document.querySelector("section");

button.addEventListener("click", getGiphy);

function getGiphy(textValue, numberValue) {
  textValue = inputText.value;
  numberValue = inputNumber.value;
  fetch(
    `http://api.giphy.com/v1/gifs/search?q=${textValue}&api_key=e0mLgyVwNIcKGS6MSEvkEiU0D45T9wH0&limit=${numberValue}`
  )
    .then((res) => res.json())
    .then((data) => {
      data.data.forEach((element) => {
        console.log(element.images.original.url);
        const img = document.createElement("img");
        img.src = element.images.original.url;
        display.appendChild(img);
      });
    });
}
