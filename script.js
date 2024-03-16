document.addEventListener("DOMContentLoaded", function () {
    const countValue = document.getElementById('Count')
    const clearButton = document.getElementById('clear');
    const errorDisplay = document.getElementById('error');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    let count = 0;

    function UpdateCounter() {
        if(count === 0){
            decrementButton.disabled = true;
            clearButton.style.display = 'none';
            errorDisplay.style.display = 'block';
        }
        else {
            decrementButton.disabled = false;
            clearButton.style.display = 'block';
            errorDisplay.style.display = 'none';
        }
        countValue.textContent = count;
    }

    incrementButton.addEventListener('click', () => {
        count++;
        UpdateCounter();
    });

    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            UpdateCounter();
        }
    });

    clearButton.addEventListener('click' , () => {
        count = 0;
        UpdateCounter();
        clearButton.style.display = 'none'; 
    });
});