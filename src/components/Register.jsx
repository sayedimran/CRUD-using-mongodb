import React, { useState } from "react"
import registerStyles from "../styles/register.module.css"
import { Link } from "gatsby"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmpass, setConfirmPass] = useState("")

  const handleSubmit = () => {
    if (name === "" || email === "" || pass === "" || confirmpass === "") {
      alert("Please fill in all fields")
    } else {
      // Checking if email already exists

      if (localStorage.getItem(email)) {
        alert("Email already exists !")
      } else {
        const userObj = {
          name,
          pass,
          email,
        }
        const obj = JSON.stringify(userObj)
        if (pass === confirmpass) {
          localStorage.setItem(email, obj)
          alert("Registered Successfully")
          setName("")
          setEmail("")
          setPass("")
          setConfirmPass("")
          window.location.href = "/login"

          // Return user to sign-in page here
        } else {
          alert("Password does not match!")
        }
      }
    }
  }

  return (
    <section className={registerStyles.container}>
      <h1>Register new Account</h1>
      <section className={registerStyles.registerForm}>
        <form
          onSubmit={handleSubmit}
          // method="POST"
          // action="http://localhost:5000/api/user/register"
        >
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
            Already have account? <Link to="/login">Sign In</Link>
          </span>
        </form>
      </section>
    </section>
  )
}

export default Register
