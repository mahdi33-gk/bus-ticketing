function allInOne(event){

    document.getElementById('noSeatText').classList.add('hidden');
    const priceAddSection = document.getElementById('seatAdd');
    const div = document.createElement('div');
    div.innerHTML = `
    <p>${event.innerText} </p>
    <p>Economy</p>
    <p>550</p>
    `
    priceAddSection.appendChild('div');

    event.classList.add('bg-secondary', 'text-white');
    const oldAvailableSeat = parseFloat(document.getElementById('main-seats').innerText);
    const oldBookedSeat = parseFloat(document.getElementById('booked-seat').innerText);

    const availableSeat = oldAvailableSeat - 1;
    document.getElementById('main-seats').innerText = availableSeat;

    const bookedSeat = oldBookedSeat + 1;
    document.getElementById('booked-seat').innerText = bookedSeat;
}
