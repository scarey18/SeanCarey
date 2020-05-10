import React, { useState } from "react"
import styled from 'styled-components'

import P from '../utils/palette'
import SectionHeader from './SectionHeader'
import ContactForm from './ContactForm'
import Card from './Card'


const Section = styled.section`
	padding-bottom: 50px;
`

const SuccessCard = styled(Card)`
	height: 20rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	text-align: center;
	animation: fade-in 800ms;

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`


const ContactSection = () => {
	const [formWasSubmitted, setFormWasSubmitted] = useState(false);

	const content = formWasSubmitted ? (
		<SuccessCard>
			<h3>Thank you for your message!</h3>
			<p>I will get back in touch with you soon. Have a great day!</p>
		</SuccessCard>
	) : (
		<ContactForm 
			onSubmission={setFormWasSubmitted}
		/>
	)

	return (
		<Section>
			<SectionHeader>Contact me</SectionHeader>
			{ content }
		</Section>
	)
}


export default ContactSection;