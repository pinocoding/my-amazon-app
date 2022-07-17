import axios from ("axios");

const options = {
  method: 'GET',
  url: 'https://amazon-products1.p.rapidapi.com/search',
  params: {country: 'US', query: 'MacBook+Pro', page: '1', categoryId: '165793011'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'amazon-products1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});