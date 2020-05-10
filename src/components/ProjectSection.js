import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import ExternalLink from './ExternalLink'


const Section = styled.section`
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
		<Section id="projects">
			<SectionHeader>Projects</SectionHeader>
			<div>
				<p>
					This site was made with Gatsby/React. You can find its source code&nbsp;
					<ExternalLink href="https://github.com/scarey18/SeanCarey">
						here.
					</ExternalLink>
				</p>
				<p>	
					Below are a few of my favorite side projects. You can find more on my&nbsp;
					<ExternalLink href="https://github.com/scarey18">
						GitHub.
					</ExternalLink>
				</p>
			</div>
			<ProjectCard
				name="What Should I Eat?"
				techs={["React", "Django", "Yelp API", "ArcGIS API", "Google Maps API"]}
				liveLink="https://www.whatshouldieat.dev/"
				srcLink="https://github.com/scarey18/whatshouldieat.dev"
				imgFluid={getFluid('wsie-screenshot.png')}
			>
				<p>A web app for hungry, indecisive people who don't know where to start their search for food. My first major React app, this project taught me a lot about how to (and how not to) structure such an app, how to integrate React with a non-JavaScript backend (Django), as well as how to work with multiple APIs.
				</p>
			</ProjectCard>
			<ProjectCard
				name="Matthew Carey, Voice"
				techs={["React", "Gatsby", "Netlify CMS"]}
				liveLink="https://www.matthewcareybaritone.com/"
				srcLink="https://github.com/scarey18/MattCarey"
				imgFluid={getFluid('mattcarey-screenshot.png')}
			>
				<p>A personal website for Matthew Carey, a professional singer and speech-language pathologist. This was my first Gatsby project, and my first project for a client. Creating a CMS and structuring the project in a way that allowed for client content management was an interesting challenge.
				</p>
			</ProjectCard>
			<ProjectCard
				name="Unbeatable Tic-Tac-Toe"
				techs={["HTML5", "CSS3", "Bulma", "JavaScript"]}
				liveLink="https://scarey18.github.io/unbeatable-tic-tac-toe/"
				srcLink="https://github.com/scarey18/unbeatable-tic-tac-toe"
				imgFluid={getFluid('tictactoe-screenshot.png')}
			>
				<p>
					A tic-tac-toe game that is impossible to win! This was a great exercise in problem solving and translating human thought processes into code. I later rewrote this app in React,&nbsp; 
					<ExternalLink href="https://github.com/scarey18/react-tictactoe">
						which you can view here.
					</ExternalLink>
				</p>
			</ProjectCard>
			<ProjectCard
				name="What Technology Should I Learn?"
				techs={["Django", "ArcGIS REST API", "GitHub Jobs API", "Stack Overflow Jobs API"]}
				liveLink="http://www.wtsil.com/"
				srcLink="https://github.com/scarey18/wtsil"
				imgFluid={getFluid('wtsil-screenshot.png')}
			>
				<p>
					This app aggregates tech keywords from job postings to show you what skills are desirable in your area. It taught me a lot about the parsing and manipulation of data (JSON, XML, and HTML), asynchronous operations, and regular expressions.
				</p>
			</ProjectCard>
			<ProjectCard
				name="Sudoku Solver"
				techs={["HTML5", "CSS3", "JavaScript", "CSS Grid"]}
				liveLink="https://scarey18.github.io/sudoku-solver/"
				srcLink="https://github.com/scarey18/sudoku-solver"
				imgFluid={getFluid('sudoku-screenshot.png')}
			>
				<p>
					A web application for solving sudoku puzzles. This was one of my earliest projects, and was another great exercise in problem solving. It taught me a great deal about manipulating the DOM, modularity, and recursion. It was made without any frameworks or libraries.
				</p>
			</ProjectCard>
		</Section>
	)
}


export default ProjectSection;