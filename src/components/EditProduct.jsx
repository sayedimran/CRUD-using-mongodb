import React, { useState } from "react"

const EditProduct = ({ id }) => {
  const [name, setName] = useState("")
  const [value, setValue] = useState("")

  const handleUpdate = e => {
    e.preventDefault()
    fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      // body: JSON.stringify({
      //   _id: id,
      //   propName: propName,
      //   value: value,
      // }),
    })
      .then(data => console.log("Updated Successfully", data))
      .catch(err => console.log(err))
  }

  //   const handleChange = (e) => {
  //     const value
  //   }

  return (
    <section>
      <form onSubmit={handleUpdate} method="PATCH">
        <label htmlFor="propName">PropName</label>
        <input
          type="text"
          name="propName"
          value={name}
          onChange={e => {
            e.preventDefault()
            setName(e.target.value)
          }}
        />
        <label htmlFor="propName">Value</label>
        <input
          type="text"
          name="value"
          value={value}
          onChange={e => {
            e.preventDefault()
            setValue(e.target.value)
          }}
        />
        <button type="submit">Update Product</button>
      </form>
    </section>
  )
}

export default EditProduct
