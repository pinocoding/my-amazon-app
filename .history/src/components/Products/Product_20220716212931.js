import React from "react";

function Product() {
  fetch('https://fakestoreapi.com/products',{
    method:"POST",
    body:JSON.stringify(
        {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
    ))
    .then((response) => response.json())
    .then((data) => console.log(data));
  return <div></div>;
}

export default Product;
