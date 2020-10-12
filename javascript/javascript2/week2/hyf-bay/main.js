console.log("Script loaded");

const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
console.log(productsUl);

function renderProducts(products) {
  products.forEach((product) => {
    const li = document.createElement("li");

    let shipsToHTML = "";
    product.shipsTo.forEach(
      (country) => (shipsToHTML += `<li>${country}</li>`)
    );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}

renderProducts(products);

//Searching for products
const input = document.getElementById("inputText");
input.addEventListener("input", filterProducts);
function filterProducts() {
  let filterVisible = products.filter((productsName) =>
    productsName.name.toLowerCase().includes(input.value)
  );
  productsUl.innerHTML = "";
  renderProducts(filterVisible);
}

//Price filter on products
const price = document.getElementById("start");
price.addEventListener("input", filterPrice, false);
function filterPrice() {
  let priceVisible = products.filter(
    (productsPrice) => productsPrice.price < price.value * 1000
  );
  productsUl.innerHTML = "";
  console.log(price.value * 1000);
  renderProducts(priceVisible);
}
