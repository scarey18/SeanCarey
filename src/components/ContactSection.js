import React from "react"
import styled from 'styled-components'

import P from '../utils/palette'
import SectionHeader from './SectionHeader'
import ContactForm from './ContactForm'


const ContactSection = () => {
	return (
		<section>
			<SectionHeader>Contact</SectionHeader>
			<ContactForm />
		</section>
	)
}


export default ContactSection;