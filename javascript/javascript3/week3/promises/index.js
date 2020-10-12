//Get respository

const main = document.querySelector("main");
const usersList = [];
function randomUser() {
  let users = [
    "Heema5657",
    "garyaldahoul",
    "DiegoRuiz454",
    "shruthidasarapu",
    "kamalrsa",
  ];
  let random = Math.floor(Math.random() * users.length);
  let randomUsers = users[random];
  if (!usersList.includes(randomUsers)) {
    usersList.push(randomUsers);
    console.log(randomUsers);
  }
}
let pro1 = randomUser();
let pro2 = randomUser();
let pro3 = randomUser();
console.log(usersList);
const prUsers = usersList.map((user) => {
  console.log(user);
  return fetch(
    `https://api.github.com/search/repositories?q=user:${user}`
  ).then((res) => res.json());
});
console.log(prUsers);
Promise.all(prUsers).then((user) => {
  console.log(user);
  user.forEach((person) => {
    const fullName = document.createElement("h1");
    fullName.innerHTML = `${person.items[0].owner.login}`;
    main.appendChild(fullName);
    person.items.forEach((element) => {
      let ul1 = document.createElement("ul");
      let newH2 = document.createElement("li");
      newH2.innerHTML = `
        <div>${element.full_name}</div>
        <div>${element.url}`;
      main.appendChild(ul1);
      ul1.appendChild(newH2);
    });
  });
  console.log(user[0].items[0].id);
});

// Class Exercise
const body = document.querySelector("section");
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    if (currency == "dollars") {
      return (this.price = (this.price / 7.5).toFixed(2));
    } else if (currency == "inr") {
      return (this.price = (this.price * 11.5).toFixed(2));
    } else if (currency == "euro") {
      return (this.price = (this.price / 7.4).toFixed(2));
    }
  }
}
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("dollars"));
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter((element) => {
      if (element.name !== product.name) {
        return element;
      }
    });
  }

  searchProduct(productName) {
    this.products = this.products.filter((pro) => {
      return productName === pro.name;
    });
  }

  getTotal() {
    this.total = this.products
      .map((data) => parseInt(data.price))
      .reduce((a, b) => a + b);
    return this.total;

    /**  other way to getTotal
      let total = 0;
      this.products.forEach((data) => (total += data.price));
      console.log(total);*/
  }

  renderProducts() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Product";
    body.appendChild(h1);
    const p = document.createElement("h3");
    p.innerHTML = ` Total price: ${this.getTotal()}`;
    body.appendChild(p);
    this.products.forEach((data) => {
      const li = document.createElement("li");
      li.innerHTML = `${data.name} :${data.price}`;
      h1.appendChild(li);
    });
  }

  getUser() {
    return new Promise((resolve) => {
      resolve(
        fetch(` https://jsonplaceholder.typicode.com/users/1`).then((resp) =>
          resp.json().then((data) => {
            const h2 = document.createElement("h2");
            h2.innerHTML = `User name : ${data.username}`;
            body.appendChild(h2);
          })
        )
      );
    });
  }
  // getCurrencyConverted(currency) {
  //   if (currency == "dollars") {
  //     this.products = this.products.map((element) => {
  //       console.log(element.price / 7.5);
  //     });
  //   }
  // }
}
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const curvescreen = new Product("curve-screen", 7000);
const roundscreen = new Product("round-screen", 9000);
flatscreen.convertToCurrency("inr");
curvescreen.convertToCurrency("inr");
roundscreen.convertToCurrency("inr");
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(curvescreen);
shoppingCart.addProduct(roundscreen);
shoppingCart.removeProduct(roundscreen);
shoppingCart.getTotal();
shoppingCart.renderProducts();
shoppingCart.searchProduct("flat-screen");
shoppingCart.getUser();
// shoppingCart.getCurrencyConverted("dollars");
