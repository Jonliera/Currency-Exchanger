import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js';

//Business Logic

function GetCurrency(dollarInput, currencySelection) {
    CurrencyService.getExchange()
    .then(function(response) {
        if(response.conversion_rates[currencySelection]) {
        printElements(response,dollarInput,currencySelection);
        } else{
            printError(response,dollarInput,currencySelection)
        }
    });
}


// //UI Logic


// function printElements(gifData)  {
//   let returnGifs = gifData[0].data;

//   returnGifs.map(function(image)  {
//     let img = document.createElement('img');
//     img.src = image.images.downsized.url;
//     document.body.appendChild(img);
//   });
// }


// function printError(error)  {
//   console.log(error[1]);
//    document.getElementById("searchResultOutPut").innerText = `There was an error finding the GIF you want for ${error[2]}: ${error[0].status} ${error[0].statusText} ${error[1].message}`;
// }

// function handleSubmission(event){
//   event.preventDefault();
//   const searchResult = document.getElementById("searchResult").value;
//   document.getElementById('searchResult').value = null;
//   getGif(searchResult);
// }

// window.addEventListener("load", function(){
//   document.querySelector('form#search').addEventListener("submit",handleSubmission);
// });
