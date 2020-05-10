import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 NOT FOUND</h1>
    <p>
    	Head back to the homepage&nbsp;
    	<a href="/">here.</a>
    </p>
  </Layout>
)

export default NotFoundPage
