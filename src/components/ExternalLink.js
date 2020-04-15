import React from "react"
import PropTypes from "prop-types"


const ExternalLink = props => {
	return (
		<a 
			{...props}
			target="_blank" 
			rel="noopener noreferrer"
		>
			{props.children}
		</a>
	)
}


ExternalLink.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}


export default ExternalLink;