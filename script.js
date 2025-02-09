function allInOne(event){

    document.getElementById('noSeatText').classList.add('hidden');
    const priceAddSection = document.getElementById('seatAdd');
    let priceContainer = document.getElementById('price-container');
    priceContainer.classList.add('flex', 'items-center', 'flex-col');

    let li = document.createElement('li');
    li.classList.add('flex', 'justify-between', 'w-full');

    li.innerHTML = `
    <span> ${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    `

    
    priceContainer.appendChild(li);
    
   

    event.classList.add('bg-secondary', 'text-white');
    const oldAvailableSeat = parseFloat(document.getElementById('main-seats').innerText);
    const oldBookedSeat = parseFloat(document.getElementById('booked-seat').innerText);

    const availableSeat = oldAvailableSeat - 1;
    document.getElementById('main-seats').innerText = availableSeat;

    const bookedSeat = oldBookedSeat + 1;
    document.getElementById('booked-seat').innerText = bookedSeat;
}
