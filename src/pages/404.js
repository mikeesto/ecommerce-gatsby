import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// https://github.com/gatsbyjs/gatsby/issues/5329#issuecomment-484741119
const browser = typeof window !== "undefined" && window

const NotFoundPage = () => {
  return (
    browser && (
      <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  )
}

export default NotFoundPage
