const fetch = require('node-fetch');
API_KEY = '4e94ffb4303ef51dfd37b97a'

async function getCurrencies(req, res) {
    const {code} = req.params
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${code}`);
    const data = await response.json();
    res.send(data);
  }

  async function convertCurrency(req, res) {
    console.log(req)
    // const {from, to, amount} = req.body
    // const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`);
    // const data = await response.json();
    // res.send(data);
  }


  module.exports = {
    getCurrencies,
    convertCurrency
};