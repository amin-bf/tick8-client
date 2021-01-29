import React from "react"

import buildClient from "../services/axios"

const Index = ({ currentUser }) => {
  return (
    <React.Fragment>
      {currentUser ? <h1>Hi User</h1> : <h1>Hi Guest</h1>}
    </React.Fragment>
  )
}

Index.getInitialProps = async ctx => {
  console.log("[INDEX]")
  const client = buildClient(ctx)
  const { data } = await client.get("/api/users/current-user")
  return data
}

export default Index
