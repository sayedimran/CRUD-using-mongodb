import React, { useEffect } from "react"

function Dashboard() {
  useEffect(() => {
    const user = localStorage.getItem("token")

    if (!user) {
      window.location.href = "/login"
    }
  }, [])

  return (
    <section>
      <h1>Hello From Dashboard</h1>
    </section>
  )
}

export default Dashboard
