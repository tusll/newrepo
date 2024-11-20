import React from 'react'

const ProductList = () => {

    const products=[
        { 
          id:1,
          name:"Laptop1",
          price:"$122"
         },
         { 
            id:2,
            name:"Laptop2",
            price:"$123"
           },
           { 
            id:3,
            name:"Laptop3",
            price:"$124"
           },
]
  return (
    <div>
        {products.map((p)=>(
            <div key={p.id}>
                <h1>Price:{p.price}</h1>
                <h1>Name:{p.name}</h1>
            </div>
        ))}
    </div>
  )
}

export default ProductList