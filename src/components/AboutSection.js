import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import P from '../utils/palette'
import SectionHeader from './SectionHeader'
import Card from './Card'


const StyledCard = styled(Card)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: auto;
	padding: 35px;

	@media screen and (max-width: 599px) {
		padding: 20px;
		width: 95vw;
	}
`

const Image = styled(Img)`
	width: 200px;
	border-radius: 100px;
	margin-bottom: 1rem;

	&:hover {
		border-radius: 50px;
	}
`

const Text = styled.p`
	width: 98%;
	max-width: 400px;
	text-align: center;
	margin-bottom: 0;
`


const AboutSection = () => {
	const query = useStaticQuery(graphql`
		{
		  file(relativePath: {eq: "headshot.jpg"}) {
		    childImageSharp {
	        fixed(width: 200, quality: 100) {
	        	...GatsbyImageSharpFixed_withWebp
	        }
		    }
		  }
		}
	`)

	return (
		<section>
			<SectionHeader>About me</SectionHeader>
			<StyledCard>
				<Image fixed={query.file.childImageSharp.fixed} />
				<Text>
					I am a trained musician turned developer. When I'm not programming, you can find me playing clarinet in a local wind band, running, or desperately begging my cat for attention. 
				</Text>
			</StyledCard>
		</section>
	)
}


export default AboutSection;