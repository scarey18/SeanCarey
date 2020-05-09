import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"

import P from '../utils/palette'


const StyledCard = styled.article`
	width: 98%;
	max-width: 800px;
	background-color: ${P.white};
	box-shadow: 0 0 10px 2px ${P.boxShadow};
	border-radius: 7px;
	margin-bottom: 3rem;

	&:last-child {
		margin-bottom: 0;
	}

	@media screen and (max-width: 599px) {
		width: 95vw;
	}
`


const Card = props => <StyledCard {...props} />;


Card.propTypes = {
	children: PropTypes.node.isRequired,
}


export default Card;