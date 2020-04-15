import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'


const HeaderAnchor = styled.div`
	width: 100%;
	height: 4rem;
	position: relative;
`


const Header = () => (
  <React.Fragment>
  	<HeaderAnchor id="page-top" />
  </React.Fragment>
)


export default Header