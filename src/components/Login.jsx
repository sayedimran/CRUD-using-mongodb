import React, { useState } from "react"
import loginStyles from "../styles/login.module.css"
import { Link, navigate } from "gatsby"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // To fetch either user exists in local storage

  const handleSubmit = async e => {
    e.preventDefault()
    let user = JSON.stringify({
      email,
      password,
    })
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: user,
      })
      const { token } = await response.json()
      console.log(token)
      if (token) {
        localStorage.setItem("token", token)
        alert("Logged In")
        navigate("/app/dashboard")
      } else {
        alert("User Doens't Exists")
      }
      // localStorage.setItem("token", token)
      // setEmail("")
      // setPassword("")
    } catch (err) {
      console.log(err)
    }
    // const user = localStorage.getItem(email)
    // const userObj = JSON.parse(user)

    // try {
    //   if (!user) {
    //     alert("Email doesn't exists")
    //   } else {
    //     if (userObj.pass !== password) {
    //       alert("Paswword is incorrect")
    //     } else {
    //       localStorage.setItem("token", userObj.name)
    //       alert("Logged in successfully")
    //       setEmail("")
    //       setPassword("")
    //       navigate("/app/dashboard")
    //     }
    //   }
    // } catch (e) {
    //   alert(e)
    // }
  }

  return (
    <section className={loginStyles.container}>
      <h1>Welcome To Login Page</h1>
      <section className={loginStyles.loginForm}>
        <form onSubmit={handleSubmit} className={loginStyles.form}>
          <label htmlFor="email">Email</label>
          <input
            className={loginStyles.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            name="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            className={loginStyles.input}
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
            required
          />
          <button
            type="submit"
            // onClick={handleSubmit}
            className={loginStyles.loginBtn}
          >
            Login
          </button>
          <span className={loginStyles.notUser}>
            Not a user? <Link to="/app/register">Register Here</Link>
          </span>
        </form>
      </section>
    </section>
  )
}

export default Login
