const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// all initial elements
const payAmountBtn = document.querySelector("#payAmount");
const decrementBtn = document.querySelectorAll("#decrement");
const quantityElem = document.querySelectorAll("#quantity");
const incrementBtn = document.querySelectorAll("#increment");
const priceElem = document.querySelectorAll("#price");
const subtotalElem = document.querySelector("#subtotal");
const taxElem = document.querySelector("#tax");
const totalElem = document.querySelector("#total");

// loop: for add event on multiple `increment` & `decrement` button
for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    let increment = Number(this.previousElementSibling.textContent);
    increment++;
    // show the `increment` variable value on `quantity` element
    this.previousElementSibling.textContent = increment;
    totalCalc();
  });
  decrementBtn[i].addEventListener("click", function () {
    // collect the value of `quantity` textContent,
    // based on clicked `decrement` button sibling.
    let decrement = Number(this.nextElementSibling.textContent);
    decrement <= 1 ? 1 : decrement--;
    this.nextElementSibling.textContent = decrement;
    totalCalc();
  });
}
// function: for calculating total amount of product price
const totalCalc = function () {
  const tax = 0.05;
  let subtotal = 0;
  let totalTax = 0;
  let total = 0;

  for (let i = 0; i < quantityElem.length; i++) {
    subtotal +=
      Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
  }
  subtotalElem.textContent = subtotal.toFixed(2);
  totalTax = subtotal * tax;
  taxElem.textContent = totalTax.toFixed(2);
  total = subtotal + totalTax;
  totalElem.textContent = total.toFixed(2);
  payAmountBtn.textContent = total.toFixed(2);
};
