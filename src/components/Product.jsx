import React, { useState, useEffect } from "react"

const Product = ({ id }) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.Product)
        setProduct(data.Product)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <section style={{ textAlign: `center` }}>
      <h1>Product Details...</h1>
      <section style={{ margin: `2rem 0rem` }}>
        <h1>{product.name}</h1>
        <p> {product.price} </p>
        <img src={product.productImage} alt="text" />
      </section>
    </section>
  )
}

export default Product
