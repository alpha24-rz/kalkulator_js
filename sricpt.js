

const buttons = document.querySelectorAll('.button-angka')
const boxH = document.getElementById('boxHasil')
const clearButton = document.getElementById('clear'); 

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        
        if (boxHasil.textContent === 'Mari Berhitung ....') {
            boxHasil.textContent = this.value;
        } else {
            
            boxHasil.textContent += this.value;
        }
        console.log('Sekarang tampil:', boxHasil.textContent);
    });
});

if (clearButton) {
    clearButton.addEventListener('click', function() {
        boxHasil.textContent = this.value ;
    });
}