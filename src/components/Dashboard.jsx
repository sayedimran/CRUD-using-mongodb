import React, { useState, useEffect } from "react"

function Dashboard() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setPosts(json)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <section>
      <h1 style={{ textAlign: `center` }}>DASHBOARD</h1>
      {loading ? (
        <h1 style={{ textAlign: `center`, fontSize: `2rem` }}>Loading...</h1>
      ) : null}
      <ul style={{ display: `flex`, flexWrap: `wrap` }}>
        {posts.map(post => {
          return (
            <ul
              style={{
                border: `1px solid`,
                width: `13rem`,
                margin: `20px 35px`,
              }}
              key={post.id}
            >
              <h1> {post.name} </h1>
              <p> {post.email} </p>
              <h4> {post.address.city} </h4>
              <button
                style={{
                  padding: `5px 12px`,
                  fontSize: `1rem`,
                  backgroundColor: `yellow`,
                  border: `none`,
                  borderRadius: `5px`,
                  marginLeft: `50px`,
                  marginBottom: `2px`,
                }}
              >
                Details
              </button>
            </ul>
          )
        })}
      </ul>
    </section>
  )
}

export default Dashboard
