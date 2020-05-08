import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import P from '../utils/palette'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'


const Section = styled.section`
	align-items: center;
	overflow-x: visible;
`


const ProjectSection = () => {
	const query = useStaticQuery(graphql`
		{
		  allImageSharp {
		    edges {
		      node {
		        fluid(maxWidth: 800) {
		        	...GatsbyImageSharpFluid_withWebp
		          originalName
		        }
		      }
		    }
		  }
		}
	`)

	function getFluid(originalName) {
		const img = query.allImageSharp.edges.find(
			edge => edge.node.fluid.originalName === originalName
		)
		return img.node.fluid;
	}

	return (
		<Section>
			<SectionHeader>Projects</SectionHeader>
			<ProjectCard
				name="What Should I Eat?"
				description="A web app for hungry, indecisive people who don't know where to start their search for food. My first major React app, this project taught me a lot about how to (and how not to) structure such an app, how to integrate React with a non-JavaScript backend (Django), as well as how to work with multiple APIs."
				techs={["React", "Django", "Yelp API", "ArcGIS API", "Google Maps API"]}
				liveLink="https://www.whatshouldieat.dev/"
				srcLink="https://github.com/scarey18/whatshouldieat.dev"
				imgFluid={getFluid('wsie-screenshot.png')}
			/>
			<ProjectCard
				name="Matthew Carey Voice"
				description="A personal website for Matthew Carey, a professional singer and speech-language pathologist. This was my first Gatsby project, and my first project for a client. Creating a CMS and structuring the project in a way that allowed for client content management was an interesting challenge."
				techs={["React", "Gatsby", "Netlify CMS"]}
				liveLink="https://hardcore-ardinghelli-3848a2.netlify.app/"
				srcLink="https://github.com/scarey18/MattCarey"
				imgFluid={getFluid('mattcarey-screenshot.png')}
			/>
			<ProjectCard
				name="Test 3"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis. Tellus id interdum velit laoreet id donec. Porttitor eget dolor morbi non."
				techs={["HTML5", "CSS3", "React"]}
				liveLink="alkdsjfa"
				srcLink="alskdfjasd"
			/>
		</Section>
	)
}


export default ProjectSection;