import React, { Component, useEffect } from "react"
import { navigate } from "gatsby"

const PrivateRoutes = ({ component: Component, location, ...rest }) => {
  const token = localStorage.getItem("token")

  if (!token && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }
  return <Component {...rest} />
}

export default PrivateRoutes
