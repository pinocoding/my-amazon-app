import axios from "axios";

// set up the request parameters
const params = {
  api_key: "demo",
  amazon_domain: "amazon.com",
  type: "product",
  asin: "B073JYC4XM",
};

// make the http GET request to Rainforest API
axios
  .get("https://api.rainforestapi.com/request", { params })
  .then((response) => {
    // print the JSON response from Rainforest API
    console.log(JSON.stringify(response.data, 0, 2));
  })
  .catch((error) => {
    // catch and print the error
    console.log(error);
  });
