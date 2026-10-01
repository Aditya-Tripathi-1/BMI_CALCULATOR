const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('.result');
    const bmiValue = document.querySelector('#bmi-value');
    const bmiStatus = document.querySelector('#bmi-status');

    if( height === "" || height < 0 || isNaN(height) ) {
        result.innerHTML = `Please give a valid ${height}`
    } else if( height === "" || height < 0 || isNaN(height) ) {
        result.innerHTML = `Please give a valid ${height}`
    } else{
        const bmi = ( weight / ( (height*height) / 10000)).toFixed(2);

        // show result

        bmiValue.textContent = bmi;

        if (bmi < 18.5) {
        bmiStatus.textContent = "Underweight";
    } 
    else if (bmi < 25) {
        bmiStatus.textContent = "Normal weight";
    } 
    else {
        bmiStatus.textContent = "Overweight";
    }
    }

})