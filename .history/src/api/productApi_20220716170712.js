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
    function getData() {
      const res = axios.get("https://api.rainforestapi.com/request", {
        params,
      });
    }
  }, []);
  return <div></div>;
}

export default productApi;

// make the http GET request to Rainforest API
