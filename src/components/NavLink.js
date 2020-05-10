import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import scrollTo from 'gatsby-plugin-smoothscroll'

import P from '../utils/palette'


const StyledLink = styled.a`
  text-decoration: none;
  color: ${P.fadedWhite};
  cursor: pointer;
  padding: 10px;
  transition: color 250ms ease-in-out;

  &:hover {
    color: ${P.white};
  }
`


const NavLink = ({ anchor, children }) => {
  function handleClick(e) {
    e.preventDefault();
    scrollTo(anchor);
  }

  return (
  	<StyledLink onClick={handleClick} href={anchor}>
  		{children}
  	</StyledLink>
  )
}


NavLink.propTypes = {
	anchor: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}


export default NavLink;