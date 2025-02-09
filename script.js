let grandPrice = document.getElementById("after-cupon-price");

let selectedSeat = [0];
let grandprice = 0;
function allInOne(event) {
  let totalPrice = parseFloat(document.getElementById("total-price").innerText);
  if (selectedSeat.includes(event.innerText)) {
    return alert("Already added.");
  } else if (selectedSeat.length < 5) {
    document.getElementById("noSeatText").classList.add("hidden");
    const priceAddSection = document.getElementById("seatAdd");
    const cuponApplyBtn = document.getElementById("cupon-apply-btn");
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

    if (bookedSeat > 3) {
      cuponApplyBtn.removeAttribute("disabled");
    }

    // cupn
  } else {
    return alert("You added maximum seats.");
  }

  selectedSeat.push(event.innerText);
}
// cupon Appy section
document
  .getElementById("cupon-apply-btn")
  .addEventListener("click", function () {
    let totalPrice = parseFloat(
      document.getElementById("total-price").innerText
    );
    let cuponInput = document.getElementById("cupon-input").value;
    if (cuponInput !== "NEW15" && cuponInput !== "Couple15") {
      return alert("its not a valid cupon.");
    }
    if (cuponInput === "NEW15") {
      grandprice = totalPrice - totalPrice * 0.15;
    } else if (cuponInput === "Couple15") {
      grandprice = totalPrice - totalPrice * 0.2;
    }
    grandPrice.innerText = grandprice.toFixed(2);
    const cuponDiv = document.getElementById("cupon-apply-field");
    console.log(cuponDiv);
    cuponDiv.classList.add("hidden");

    const discountCountainer = document.getElementById("discount");
    discountCountainer.innerHTML = `
    <p>Discount:</p>
    <p>-BDT: <span>${totalPrice-grandprice}</span></p>
    `;
  });
