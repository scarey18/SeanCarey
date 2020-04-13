import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WelcomeSection from '../components/welcomesection'


const IndexPage = () => (
  <Layout>
    <SEO title="Sean Carey | Web Developer" />
    <WelcomeSection />
  </Layout>
)

export default IndexPage
