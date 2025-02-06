document.getElementById('seat').addEventListener('click',function(event){
    this.classList.add('bg-green-400');
})

const displayMinusSeats = document.getElementById('show-seat').innerText;
const displayMainSeats = parseFloat(displayMinusSeats);