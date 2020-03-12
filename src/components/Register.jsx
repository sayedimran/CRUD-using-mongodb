import React, { useState } from "react"
import registerStyles from "../styles/register.module.css"
import { Link, navigate } from "gatsby"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmpass, setConfirmPass] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    let user = JSON.stringify({
      name,
      email,
      pass,
    })

    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: user,
      })
      const data = await response.json()
      console.log(data)
      setName("")
      setEmail("")
      setPass("")
      setConfirmPass("")
      alert("Registered Successfully")
      navigate("/app/login")
    } catch (err) {
      console.log(err)
    }
    // setName("")
    // setEmail("")
    // setPass("")
    // setConfirmPass("")
    // navigate("/app/login")
    // if (name === "" || email === "" || pass === "" || confirmpass === "") {
    //   alert("Please fill in all fields")
    // } else {
    //   // Checking if email already exists

    //   if (localStorage.getItem(email)) {
    //     alert("Email already exists !")
    //   } else {
    //     const userObj = {
    //       name,
    //       pass,
    //       email,
    //     }
    //     const obj = JSON.stringify(userObj)
    //     if (pass === confirmpass) {
    //       localStorage.setItem(email, obj)
    //       alert("Registered Successfully")
    //       setName("")
    //       setEmail("")
    //       setPass("")
    //       setConfirmPass("")
    //       navigate("/app/login")

    //       // Return user to sign-in page here
    //     } else {
    //       alert("Password does not match!")
    //     }
    //   }
    // }
  }

  return (
    <section className={registerStyles.container}>
      <h1>Register new Account</h1>
      <section className={registerStyles.registerForm}>
        <form onSubmit={handleSubmit}>
          <label className={registerStyles.label} htmlFor="username">
            Name
          </label>
          <input
            className={registerStyles.input}
            type="text"
            name="name"
            value={name}
            required
            onChange={e => setName(e.target.value)}
          />
          <label className={registerStyles.label} htmlFor="email">
            Email
          </label>
          <input
            className={registerStyles.input}
            type="email"
            name="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label className={registerStyles.label} htmlFor="password">
            Password
          </label>
          <input
            className={registerStyles.input}
            type="password"
            name="pass"
            required
            value={pass}
            onChange={e => setPass(e.target.value)}
          />{" "}
          <label className={registerStyles.label} htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={registerStyles.input}
            type="password"
            name="confirmpass"
            required
            value={confirmpass}
            onChange={e => setConfirmPass(e.target.value)}
          />
          <button type="submit" className={registerStyles.registerBtn}>
            Register
          </button>{" "}
          <span className={registerStyles.alreadyUser}>
            Already have account? <Link to="/app/login">Sign In</Link>
          </span>
        </form>
      </section>
    </section>
  )
}

export default Register
