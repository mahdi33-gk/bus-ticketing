document.getElementById('seat').addEventListener('click',function(event){
    this.classList.add('bg-green-400');
    const littleClick = displa + 1;
    document.getElementById('show-seat').innerText = littleClick;

    const bigClick = displayM - 1;
    document.getElementById('main-seats').innerText = bigClick;
})

const displayMinusSeats = document.getElementById('show-seat').innerText;
const displa = parseFloat(displayMinusSeats);
const displaybigSeats = document.getElementById('main-seats').innerText;
const displayM = parseFloat(displaybigSeats);


// document.getElementById('seat').addEventListener('click', function(event) {
//     this.classList.add('bg-green-400');

//     // Fetch the latest values inside the event listener
//     let displayMainlittleSeats = parseInt(document.getElementById('show-seat').innerText);
//     let displayMainbigSeats = parseInt(document.getElementById('main-seats').innerText);

//     // Increase the selected seat count
//     const littleClick = displayMainlittleSeats + 1;
//     document.getElementById('show-seat').innerText = littleClick;

//     // Decrease the remaining seat count
//     const bigClick = displayMainbigSeats - 1;
//     document.getElementById('main-seats').innerText = bigClick;
// });
