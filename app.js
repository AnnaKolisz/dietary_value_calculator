const calories = document.querySelector('#calories');
const fats = document.querySelector('#fats');
const carbo = document.querySelector('#carbo');
const proteins = document.querySelector('#proteins');
const grams = document.querySelector('#grams');
const btn = document.querySelector('#btn');
const val = document.querySelector('#val');
const clear = document.querySelector('#clear');
const inputs = document.querySelectorAll('input');
const calRes = document.querySelector('#calVl');
const fatRes = document.querySelector('#fatVl');
const carboRes = document.querySelector('#carboVl');
const protRes = document.querySelector('#proVl');

btn.addEventListener('click', () => {
    const gram = grams.value;
    calRes.innerText =((calories.value *gram)/100).toFixed();
    carboRes.innerText =((carbo.value *gram)/100).toFixed(1);
    protRes.innerText =((proteins.value *gram)/100).toFixed(1);
    fatRes.innerText =((fats.value *gram)/100).toFixed(1);
});

clear.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = null;
    })
});