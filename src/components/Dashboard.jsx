import React, { useEffect, useState } from "react"
const axios = require("axios").default

function Dashboard() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState("")
  const [title, setTitle] = useState("")

  function handleClick() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: newPost,
        userId: 1,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }

  useEffect(() => {
    const user = localStorage.getItem("token")

    if (!user) {
      window.location.href = "/login"
    }

    axios("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(console.log)
  }, [posts])

  return (
    <section>
      <h1>Hello From Dashboard</h1>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title of Post"
        required
      />
      <input
        type="text"
        value={newPost}
        onChange={e => setNewPost(e.target.value)}
        placeholder="Add new post"
        required
      />
      <button onClick={handleClick}>Add Post</button>
      {posts.map(post => (
        <div>
          <li>{post.title}</li>
          <p>{post.body}</p>
        </div>
      ))}
    </section>
  )
}

export default Dashboard
