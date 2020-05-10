import React, { useState, useEffect } from "react"
import styled from "styled-components"

import P from '../utils/palette'
import NavLink from './NavLink'


const HeaderAnchor = styled.div`
	width: 100%;
	height: 3rem;
	position: relative;
`

const FixedHeader = styled.header`
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 250ms ease-in-out;
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
`

const NavBar = styled.nav`
  height: 100%;
  width: 80%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  function handleScroll() {
    if (window.scrollY === 0) {
      setIsScrolled(false);
    }
    else {
      setIsScrolled(true);
    }
  }

  const fixedHeaderStyle = isScrolled ? {
    boxShadow: `0 3px 7px 0 ${P.boxShadow}`,
    backgroundColor: P.themeColor,
  } : {
  	boxShadow: null,
  	backgroundColor: null,
  }

  return (
    <React.Fragment>
      <HeaderAnchor id="header-top"/>
      <FixedHeader id="header-fixed" style={fixedHeaderStyle}>
      <NavBar>
        <NavLink anchor="#header-top" key='0'>Home</NavLink>
        <NavLink anchor="#projects" key='1'>Projects</NavLink>
        <NavLink anchor="#about" key='2'>About</NavLink>
        <NavLink anchor="#contact" key='3'>Contact</NavLink>
      </NavBar>
      </FixedHeader>
    </React.Fragment>
  )
}

export default Header;