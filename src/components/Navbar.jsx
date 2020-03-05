import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import navbarStyles from "../styles/navbar.module.css"
import { FaUserCircle } from "react-icons/fa"

function Navbar() {
  return (
    <section className={navbarStyles.container}>
      <nav className={navbarStyles.navbar}>
        <ul className={navbarStyles.links}>
          <li className={navbarStyles.navlinks}>
            <Link
              style={{ textDecoration: `none`, color: `darkblue` }}
              to="/app/register"
            >
              Register
            </Link>
          </li>
          <li className={navbarStyles.navlinks}>
            <Link
              style={{ textDecoration: `none`, color: `darkblue` }}
              to="/app/login"
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
