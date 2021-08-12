let cartNumber = document.getElementById('cartNumber');
let cartbtn1 = document.getElementById('products-item-button-add1');
let cartbtn2 = document.getElementById('products-item-button-add2');
let cartbtn3 = document.getElementById('products-item-button-add3');
let cartbtn4 = document.getElementById('products-item-button-add4');
let counter = 0;

cartbtn1.addEventListener("click", function () {
  counter++;
  cartNumber.innerHTML = counter;
  console.log(counter);
});

cartbtn2.addEventListener("click", function () {
  counter++;
  cartNumber.innerHTML = counter;
  console.log(counter);
});

cartbtn3.addEventListener("click", function () {
  counter++;
  cartNumber.innerHTML = counter;
  console.log(counter);
});

cartbtn4.addEventListener("click", function () {
  counter++;
  cartNumber.innerHTML = counter;
  console.log(counter);
});