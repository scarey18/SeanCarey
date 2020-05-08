import React from "react"
import styled from 'styled-components'

import P from '../utils/palette'
import TypewriterGroup from './TypewriterGroup'


const Section = styled.section`
	min-height: 20rem;
	justify-content: center;
	align-items: center;
	color: ${P.white};
	background-color: ${P.black};
	padding-bottom: 50px;
	border-radius: 13px 13px 0 0;

	h1, p {
		text-align: center;
	}
`

const WelcomeSection = () => {
	return (
		<Section>
			<TypewriterGroup cursorColor={P.lightenedTheme}>
				<h1>Hi, I'm Sean.</h1>
				<p speed={25}>I am a full stack web developer currently located in Cincinnati, OH.</p>
			</TypewriterGroup>
		</Section>
	)
}


export default WelcomeSection;