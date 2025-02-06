document.getElementById('seat').addEventListener('click',function(event){
    this.classList.add('bg-green-400');
})

const displayMinusSeats = document.getElementById('show-seat').innerText;
const displayMainlittleSeats = parseFloat(displayMinusSeats);
const displaybigSeats = document.getElementById('main-seats').innerText;
const displayMainbigSeats = parseFloat(displayMainbigSeats);