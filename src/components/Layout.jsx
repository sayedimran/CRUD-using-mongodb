import React from "react"
import Navbar from "./Navbar"

function Layout({ children }) {
  return (
    <section>
      <Navbar /> <br />
      {children}
    </section>
  )
}

export default Layout
