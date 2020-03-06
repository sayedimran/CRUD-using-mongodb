import React, { useState } from "react"
import formStyles from "../styles/products.module.css"
import axios from "axios"
import { navigate } from "gatsby"

function Addnew() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log(name, price)
    const formData = new FormData()
    formData.append("name", name)
    formData.append("price", price)
    formData.append("productImage", image)
    axios
      .post("http://localhost:3000/products", formData, {})
      .then(data => {
        console.log("Created Post request...", data)
      })
      .catch(err => {
        console.log(err)
      })
    setName("")
    setPrice("")
    setImage("")
    navigate("/app/dashboard")
  }

  return (
    <section className={formStyles.formContainer}>
      <form className={formStyles.form} onSubmit={handleSubmit} method="POST">
        <label htmlFor="title">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
          className={formStyles.input}
          required
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={e => {
            setPrice(e.target.value)
          }}
          className={formStyles.input}
          required
        />
        <label htmlFor="title">Product Image</label>
        <input
          type="file"
          name="productImage"
          onChange={e => {
            setImage(e.target.files[0])
            console.log(e.target.files[0])
          }}
          // value={image}
          className={formStyles.input}
          required
        />
        <button type="button" onClick={handleSubmit}>
          ADD PRODUCT
        </button>
      </form>
    </section>
  )
}

export default Addnew
