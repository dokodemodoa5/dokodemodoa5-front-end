import axios from "axios";

export const getPrices = function (cryptocurrencies) {
    return new Promise((resolve, reject) => {
        let symbols = "";
        cryptocurrencies.forEach((element, index) => {
            symbols += `${element.name}${index == cryptocurrencies.length - 1 ? "" : ","
                }`;
        });
        console.log(symbols);
        axios
            .get(
                `http://localhost:8080/api/v1/cryptocurrency/quotes/latest?symbol=${symbols}`,
                {
                    headers: {
                        "X-CMC_PRO_API_KEY": process.env.VUE_APP_COINMARKETCAP_KEY,
                    },
                }
            )
            .then((response) => {
                cryptocurrencies.forEach((element) => {
                    element.price = response.data.data[element.name].quote.USD.price;
                });
                resolve(cryptocurrencies);
            });
    })
}