let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let currencyOne = document.getElementById('currencyOne');
let currencyTwo = document.getElementById('currencyTwo');
let inputAmount = document.getElementById('inputAmount');
let btnClear = document.getElementById('btnClear');
let btnConvert = document.getElementById('btnConvert');
let displayAmount = document.getElementById('displayAmount');
let outputAmount = document.getElementById('outputAmount');
let currencyInput = document.querySelectorAll('.currencyInput');
let resultFrom;
let resultTo;
var currencyValue;

const api = "https://api.exchangerate-api.com/v4/latest/USD";

form1.addEventListener('change', (event)=>{
    resultFrom = `${event.target.value}`;
    console.log(resultFrom);
})

form2.addEventListener('change', (event)=>{
    resultTo = `${event.target.value}`;
    console.log(resultTo);
})


currencyOne.addEventListener('input', updateValue);
currencyTwo.addEventListener('input', updateValue)

function updateValue(e) {
    currencyValue = e.target.value;
    console.log(currencyValue)
}

//with addEventListener iterate 
// currencyInput.forEach(currency=>{
//     currency.addEventListener('input', function(e){
//     currencyValue = e.target.value;
//     console.log(currencyValue)
//     })
// })

btnConvert.addEventListener('click', getResults);

function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        })
        .then(displayResults);
} 


function displayResults(currency){
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    outputAmount.innerHTML = ((toRate / fromRate) * currencyValue).toFixed(2);
    displayAmount.style.display = "block";
}

btnClear.addEventListener('click', clearVal);
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("outputAmount").innerHTML = "";
};