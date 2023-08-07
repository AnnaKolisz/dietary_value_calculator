window.addEventListener("DOMContentLoaded", () => {
    const val = document.querySelector('#grams-from');
    const calories = document.querySelector('#calories');
    const fats = document.querySelector('#fats');
    const carbo = document.querySelector('#carbo');
    const proteins = document.querySelector('#proteins');
    const grams = document.querySelector('#grams');
    const btn = document.querySelector('#btn');
    const clear = document.querySelector('#clear');
    const inputs = document.querySelectorAll('input');
    const calRes = document.querySelector('#calVl');
    const fatRes = document.querySelector('#fatVl');
    const carboRes = document.querySelector('#carboVl');
    const protRes = document.querySelector('#proVl');

    
    btn.addEventListener('click', () => {
        const gram = grams.value;
        const gramsFrom = val.value;
        calRes.innerText =((calories.value *gram)/gramsFrom).toFixed();
        carboRes.innerText =((carbo.value *gram)/gramsFrom).toFixed(1);
        protRes.innerText =((proteins.value *gram)/gramsFrom).toFixed(1);
        fatRes.innerText =((fats.value *gram)/gramsFrom).toFixed(1);
    });
    
    clear.addEventListener('click', () => {
        inputs.forEach(input => {
            input.value = null;
        })
        val.value = 100;
        calRes.innerText ='';
        carboRes.innerText ='';
        protRes.innerText ='';
        fatRes.innerText ='';
    });

})
