function allInOne(event){

    document.getElementById('noSeatText').classList.add('hidden');
    const priceAddSection = document.getElementById('seatAdd');
    let priceContainer = document.getElementById('price-container');
    priceContainer.classList.add('flex', 'justify-between');
    priceContainer.innerHTML = `
    <p>${event.innerText} </p>
    <p>Economy</p>
    <p>550</p>
    `
   

    event.classList.add('bg-secondary', 'text-white');
    const oldAvailableSeat = parseFloat(document.getElementById('main-seats').innerText);
    const oldBookedSeat = parseFloat(document.getElementById('booked-seat').innerText);

    const availableSeat = oldAvailableSeat - 1;
    document.getElementById('main-seats').innerText = availableSeat;

    const bookedSeat = oldBookedSeat + 1;
    document.getElementById('booked-seat').innerText = bookedSeat;
}
