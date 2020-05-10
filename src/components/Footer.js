import React from 'react'
import styled from 'styled-components'
import { FaEnvelope } from 'react-icons/fa'
import { Github, Linkedin } from '@icons-pack/react-simple-icons'

import P from '../utils/palette'
import ExternalLink from './ExternalLink'


const StyledFooter = styled.footer`
	width: 100%;
`

const FooterContent = styled.div`
	min-height: 3rem;
	width: 80%;
	max-width: 1080px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	@media screen and (max-width: 599px) {
		flex-direction: column;
	}
`

const ContactLink = styled(ExternalLink)`
  text-decoration: none;
  color: ${P.fadedWhite};
  cursor: pointer;
  padding: 10px;
  transition: color 250ms ease-in-out;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${P.white};
  }

  svg {
  	margin-right: 5px;
  }
`


const Footer = () => {
	return (
		<StyledFooter>
			<FooterContent>
				<ContactLink href="https://github.com/scarey18">
					<Github />
					GitHub
				</ContactLink>
				<ContactLink href="mailto:seancarey18@gmail.com">
					<FaEnvelope />
					seancarey18@gmail.com
				</ContactLink>
				<ContactLink href="https://www.linkedin.com/in/sean-carey-055074156/">
					<Linkedin />
					LinkedIn
				</ContactLink>
			</FooterContent>
		</StyledFooter>
	)
}


export default Footer;