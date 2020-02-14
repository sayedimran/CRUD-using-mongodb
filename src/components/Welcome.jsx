import React from "react"
import Icon from "../images/writing.svg"
import { Link } from "gatsby"
import welcomeStyles from "../styles/welcome.module.css"

function Welcome() {
  return (
    <section className={welcomeStyles.main}>
      <section className={welcomeStyles.container}>
        <img
          style={{
            width: `5rem`,
            height: `7rem`,
          }}
          src={Icon}
          alt="register-here"
        />
        <h1>Register Below or Login</h1>
        <section className={welcomeStyles.registerBtn}>
          <Link to="/register">
            <button className={welcomeStyles.buttons} type="button">
              Register Now
            </button>
          </Link>
          <Link to="/login">
            <button className={welcomeStyles.buttons} type="button">
              Login
            </button>
          </Link>
        </section>
      </section>
    </section>
  )
}

export default Welcome
