import React, { useState } from "react"
import axios from "axios"
import { navigate } from "gatsby"
import editStyles from "../styles/products.module.css"

const EditProduct = ({ id }) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleUpdate = e => {
    e.preventDefault()
    axios
      .put(`http://localhost:3000/products/${id}`, {
        name: name,
        price: price,
      })
      .then(data => {
        console.log(data)
        alert("Update Successfully")
        setName("")
        setPrice("")
        navigate("/app/dashboard")
      })

      .catch(err => console.log(err))
  }

  return (
    <section className={editStyles.formContainer}>
      <form onSubmit={handleUpdate} method="PUT" className={editStyles.form}>
        <label htmlFor="propName">PropName</label>
        <input
          type="text"
          className={editStyles.input}
          name="name"
          value={name}
          onChange={e => {
            e.preventDefault()
            setName(e.target.value)
          }}
        />
        <label htmlFor="propName">Value</label>
        <input
          type="text"
          className={editStyles.input}
          name="price"
          value={price}
          onChange={e => {
            e.preventDefault()
            setPrice(e.target.value)
          }}
        />
        <button type="submit">Update Product</button>
      </form>
    </section>
  )
}

export default EditProduct
