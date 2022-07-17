import React from "react";

function Product() {
  fetch()
    .then((response) => response.json())
    .then((data) => console.log(data));
  return <div>
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
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
  </div>;
}

export default Product;
