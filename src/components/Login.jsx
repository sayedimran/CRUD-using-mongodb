import React, { useState } from "react"
import loginStyles from "../styles/login.module.css"
import { Link } from "gatsby"

const Login = props => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // To fetch either user exists in local storage

  function handleSubmit() {
    const user = localStorage.getItem(email)
    const userObj = JSON.parse(user)

    try {
      console.log(userObj)

      if (!user) {
        alert("Invalid Email")
      } else {
        if (userObj.pass !== password) {
          alert("paswword is incorrect")
        } else {
          localStorage.setItem("token", userObj.name)
          alert("logged in successfully")
          setEmail("")
          setPassword("")
          return (
            <div>
              <h1>hello</h1>
            </div>
          )
        }
      }
    } catch (e) {
      alert(e)
    }
  }

  return (
    <section className={loginStyles.container}>
      <h1>Welcome To Login Page</h1>
      <section className={loginStyles.loginForm}>
        <form className={loginStyles.form}>
          <label htmlFor="email">Email</label>
          <input
            className={loginStyles.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            name="email"
          />

          <label htmlFor="password">Password</label>
          <input
            className={loginStyles.input}
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
          />
          <button
            type="button"
            onClick={handleSubmit}
            className={loginStyles.loginBtn}
          >
            Login
          </button>
          <span className={loginStyles.notUser}>
            Not a user? <Link to="/register">Register Here</Link>
          </span>
        </form>
      </section>
    </section>
  )
}

export default Login
