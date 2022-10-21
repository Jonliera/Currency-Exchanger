export default class CurrencyService {
    static getExchange() {
        return fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
        .then(function(response) {
            if (!response.ok) {
                return resoponse.json()
                .then(function(apiErrorMessage){
                const errorMessage = `${response.status} ${response.statusText}${apiErrorMessage}`;
                throw new Error(errorMessage);
                });
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            return error;
        });
    }
}    