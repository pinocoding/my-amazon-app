import axios from "axios";
import { useEffect } from "react";
import React from "react";

function productApi() {
  const params = {
    api_key: "demo",
    amazon_domain: "amazon.com",
    type: "product",
    asin: "B073JYC4XM",
  };

  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://api.rainforestapi.com/request", {
        params,
      });
      return res;
    }
    getData().then(())
  }, []);
  return <div></div>;
}

export default productApi;

// make the http GET request to Rainforest API
