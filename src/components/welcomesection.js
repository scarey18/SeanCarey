import React from "react"
import styled from 'styled-components'

import P from '../utils/palette'
import Typewriter from './typewriter'


const Section = styled.section`
	align-items: flex-start;

	h1, p {
		
	}
`


const WelcomeSection = () => {
	return (
		<Section>
			<h1>
				<Typewriter>Hi, I'm Sean.</Typewriter>
			</h1>
			<p>
				<Typewriter>
					I am a full stack web developer currently located in Cincinnati, OH.
				</Typewriter>
			</p>
		</Section>
	)
}


// const Section = styled.section`
// 	align-items: flex-start;

// 	h1, p {
// 		white-space: nowrap;
// 		overflow: hidden;
// 		width: 0;
// 		transition: none;
// 		border-right: solid 3px transparent;
// 	}

// 	h1 {
// 		animation: animated-header 800ms steps(14,end) 0.5s 1 normal forwards, animated-cursor steps(14,end) 800ms 2.5;
// 	}

// 	p {
// 		animation: animated-text 1.5s steps(69,end) 2.2s 1 normal forwards, animated-cursor steps(69,end) 800ms 2.2s infinite;
// 	}	

// 	@keyframes animated-header {
// 	  from {width: 0;}
// 	  to {width: 12.5rem;}
// 	}

// 	@keyframes animated-text{
// 		from {width: 0;}
// 		to {width: 31rem;}
// 	}

// 	@keyframes animated-cursor {
// 	  from {border-right-color: ${P.themeColor};}
// 	  to {border-right-color: transparent;}
// 	}
// `


// const WelcomeSection = () => {
// 	return (
// 		<Section>
// 			<h1>Hi, I'm Sean.</h1>
// 			<p>I am a full stack web developer currently located in Cincinnati, OH.</p>
// 		</Section>
// 	)
// }


export default WelcomeSection;