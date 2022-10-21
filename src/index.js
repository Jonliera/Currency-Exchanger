import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service';
// import CurrencyService from './currency-service.js';

//Business Logic

function getExchange(dollarInput,currencySelection){
    CurrencyService.getExchange()
    .then(function(response) {
    if (response.conversion_rates[currencySelection]){
        printElements(response,dollarInput,currencySelection);
    } else {
        printError(response,dollarInput,currencySelection)
    }
    });
}


//UI Logic
function printElements(response,dollarInput,currencySelection){
    document.querySelector('#showResults').innerText = `Your Exchange rate for ${dollarInput} is ${(response.conversion_rates[currencySelection] * dollarInput)} ${currencySelection}.`;
}

function printError(response,dollarInput,currencySelection) {
document.querySelector('#showResults').innerText = `There was an error accesing the exchange data for ${dollarInput} ${currencySelection}.`;
}

function handleSubmission(event) {
    event.preventDefault();
    let dollarInput = document.querySelector('#dollarInput').value;
    let currencySelection = document.querySelector('#currencySelection').value;
    getExchange(dollarInput,currencySelection);
}
window.addEventListener("load", function(){
  document.querySelector('form#input').addEventListener("submit",handleSubmission);
});
