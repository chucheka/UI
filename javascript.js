/* Order codes, Add to cart button */

let addCart = document.getElementsByClassName("add-cart");
let quantity = document.querySelectorAll("[type='number']");

for (one of addCart) {
  one.addEventListener("click", function addCart() {
    alert(quantity[i].value);
  });
}

// addCart.forEach((one,i)=>{
//   one.addEventListener('click',()=>{
//     alert(quantity[i].value)
//   }
// })

let orderdiv = document.getElementsByClassName("orderdiv"),
  decline = document.getElementsByClassName("decline"),
  accept = document.getElementsByClassName("accept");

for ([decline, orderdiv] of [declines, orderdivs]) {
  decline.addEventListener("click", function(orderdiv) {
    alert("Declined");
  });
}

for ([accept, decline] of [accepts, declines]) {
  accept.addEventListener("click", function(decline) {
    alert("Accepted");
  });
}

// decline.addEventListener("click", function() {
//   alert("Declined");
//   orderdiv.style.hidden = true;
// });

// accept.addEventListener("click", function() {
//   alert("Accepted");
//   decline.style.hidden = true;
// });
