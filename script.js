const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const Quantity = document.getElementsByClassName("quantity");
const subTotal = document.getElementsByClassName("subtotal");
const price = document.getElementsByClassName("price");
const CartTotal = document.getElementsByClassName("cartTotal");
function inputCheck() {
  for (let x = 0; x < Quantity.length; x++) {
    subTotal[x].innerHTML = Quantity[x].value * price[x].innerHTML;
    CartTotal[1].innerHTML += subTotal[x].innerHTML;
    CartTotal[0].innerHTML += subTotal[x].innerHTML;
  }
  // or do something else
}

for (let x = 0; x < Quantity.length; x++) {
  Quantity[x].addEventListener("change", inputCheck);
}
