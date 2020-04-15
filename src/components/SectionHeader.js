import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import P from '../utils/palette'


const Header = styled.h1`
	padding: 10px;
	width: auto;
	margin-bottom: 2rem;

	&:after {
		content: '';
		display: block;
		margin: 0 auto;
		width: 5rem;
		padding-top: 10px;
		border-bottom: 3px solid ${P.themeColor};
	}
`


const SectionHeader = ({ className, children }) => {
	return (
		<Header className={className}>
			{children}
		</Header>
	)
}


SectionHeader.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string.isRequired,
}


export default SectionHeader;