import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import WelcomeSection from '../components/WelcomeSection'
import ProjectSection from '../components/ProjectSection'


const IndexPage = () => (
  <Layout>
    <SEO title="Sean Carey | Web Developer" />
    <WelcomeSection />
    <ProjectSection />
  </Layout>
)

export default IndexPage
