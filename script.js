function allInOne(event) {
  document.getElementById("noSeatText").classList.add("hidden");
  const priceAddSection = document.getElementById("seatAdd");
  const cuponApplyBtn = document.getElementById("cupon-appy-btn");
  let priceContainer = document.getElementById("price-container");
  priceContainer.classList.add("flex", "items-center", "flex-col");

  let li = document.createElement("li");
  li.classList.add("flex", "justify-between", "w-full");

  li.innerHTML = `
    <span> ${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    `;

  priceContainer.appendChild(li);

  event.classList.add("bg-secondary", "text-white");
  const oldAvailableSeat = parseFloat(
    document.getElementById("main-seats").innerText
  );
  const oldBookedSeat = parseFloat(
    document.getElementById("booked-seat").innerText
  );

  const availableSeat = oldAvailableSeat - 1;
  document.getElementById("main-seats").innerText = availableSeat;

  let bookedSeat = oldBookedSeat + 1;
  document.getElementById("booked-seat").innerText = bookedSeat;

  // price show section
  document.getElementById("total-price").innerText = 550 * bookedSeat;
  
  if(bookedSeat>3){
    cuponApplyBtn.removeAttribute('disabled');
  }
 

 
}
 // cupon Appy section
// let totalPrice = parseFloat(document.getElementById("total-price").innerText);
// document
// .getElementById("cupon-input")
// .addEventListener('keyup', function (event) {
//   let grandPrice = document.getElementById("after-cupon-price");
//   let cuponInput = document.getElementById('cupon-input').value;
  
//   const cuponApplyBtn = document.getElementById("cupon-appy-btn");
//   if (cuponInput === "NEW15") {
//     cuponApplyBtn.removeAttribute("disabled");
//     let displayGrand = totalPrice - totalPrice * (15 / 100);
//     grandPrice.innerText = displayGrand;
//   } else if (cuponInput === "Couple15") {
//     cuponApplyBtn.re("disabled");
//     let displayGrand = totalPrice - totalPrice * (20 / 100);
//     grandPrice.innerText = displayGrand;
//   } else {
//   }
// });
