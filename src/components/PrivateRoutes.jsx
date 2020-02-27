import React, { Component, useEffect } from "react"
import { navigate } from "gatsby"

const PrivateRoutes = ({ component: Component, location, ...rest }) => {
  const user = localStorage.getItem("token")

  if (!user && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }
  return <Component {...rest} />
}

export default PrivateRoutes
