import React from "react"
import { Link } from "gatsby"
import navbarStyles from "../styles/navbar.module.css"

function Navbar() {
  return (
    <section className={navbarStyles.container}>
      <nav className={navbarStyles.navbar}>
        <ul className={navbarStyles.links}>
          <li className={navbarStyles.navlinks}>
            <Link
              style={{ textDecoration: `none`, color: `darkblue` }}
              to="/register"
            >
              Register
            </Link>
          </li>
          <li className={navbarStyles.navlinks}>
            <Link
              style={{ textDecoration: `none`, color: `darkblue` }}
              to="/login"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar
