import "bootstrap/dist/css/bootstrap.css"
import React from "react"

import buildClient from "../services/axios"
import Header from "../components/header"

const Bootstrap = ({ Component, pageProps, currentUser }) => {
  console.log(pageProps)
  return (
    <React.Fragment>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  )
}

Bootstrap.getInitialProps = async appContext => {
  console.log("[_APP]")
  const client = buildClient(appContext.ctx)
  const { data } = await client.get("/api/users/current-user")

  let pageProps = {}
  if (appContext.Component.getInitialProps)
    pageProps = await appContext.Component.getInitialProps(appContext.ctx)

  return {
    pageProps,
    ...data
  }
}

export default Bootstrap
