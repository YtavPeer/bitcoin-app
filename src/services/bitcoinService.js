const axios = require('axios');

export const bitcoinService = {
      getRate,
      getMarketPrice,
      getConfirmedTransactions,
}


//return usd rate
async function getRate() {
      try {
            const response = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1');
            console.log(response.data);
            return response.data;
      } catch (error) {
            console.error('bitcoin service: get rate: cant fetch rate data', error);
      }
}

async function getMarketPrice() {
      try {
            const response = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true');
            console.log(response.data);
            return response.data;
      } catch (error) {
            console.error('bitcoin service: get rate: cant fetch rate data', error);
      }
      try {
            const response = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true');
            console.log(response.data);
            return response.data
      } catch (error) {
            console.error('bitcoin service: get rate: cant fetch rate data', error);
      }
}

//return chart data:
async function getConfirmedTransactions() {
      try {
            const response = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1');
            console.log(response.data);
            return response.data
      } catch (error) {
            console.error('bitcoin service: get rate: cant fetch rate data', error);
      }
}



