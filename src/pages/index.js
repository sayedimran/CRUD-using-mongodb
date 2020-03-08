import React from "react"
import Welcome from "../components/Welcome"
import Layout from "../components/Layout"
import { navigate } from "gatsby"

const IndexPage = () => {
  const user = localStorage.getItem("token")
  console.log(user)
  if (user) {
    navigate("/app/dashboard")
  }

  return (
    <Layout>
      <Welcome />
    </Layout>
  )
}

export default IndexPage
