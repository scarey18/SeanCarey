import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import WelcomeSection from '../components/WelcomeSection'
import ProjectSection from '../components/ProjectSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'


const IndexPage = () => (
  <Layout>
    <SEO title="Sean Carey | Web Developer" />
    <WelcomeSection />
    <ProjectSection />
    <AboutSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
