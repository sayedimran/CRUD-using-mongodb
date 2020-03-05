import React, { useState } from "react"
import formStyles from "../styles/products.module.css"
import axios from "axios"

function Addnew() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log(title, price)
    axios
      .post("http://localhost:3000/products")
      .then(data => {
        console.log(data)
        setTitle(title)
        setPrice(price)
      })
      .catch(err => {
        console.log(err)
      })
    setTitle("")
    setPrice("")
    setImage("")
  }

  return (
    <section className={formStyles.container}>
      <form className={formStyles.form} onSubmit={handleSubmit} method="POST">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="name"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className={formStyles.input}
          required
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className={formStyles.input}
          required
        />
        {/* <label htmlFor="title">Product Image</label>
        <input
          type="file"
          name="productImage"
          value={image}
          onChange={e => {
            setImage(e.target.value)
            console.log(e.target.files)
          }}
          className={formStyles.input}
          required
        /> */}
        <button type="submit">ADD PRODUCT</button>
      </form>
    </section>
  )
}

export default Addnew
