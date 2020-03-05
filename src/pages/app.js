import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Login from "../components/Login"
import Register from "../components/Register"
import PrivateRoute from "../components/PrivateRoutes"

import Dashboard from "../components/Dashboard"
import Product from "../components/Product"
import Addnew from "../components/Addnew"

const app = () => {
  return (
    <Layout>
      <Router>
        <Register path="/app/register" />
        <Login path="/app/login" />
        <PrivateRoute path="/app/dashboard" component={Dashboard} />
        <Product path="/app/product/:id" />
        <Addnew path="/app/product/new" />
      </Router>
    </Layout>
  )
}

export default app
