import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from 'styled-components'

import P from '../utils/palette'
import Header from "./Header"


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
  }

  * {
    transition: all 250ms ease-in-out;
  }

  html, body, #___gatsby {
    width: 100%;
    overflow: auto;
    overflow: initial;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #014d18;
    background: linear-gradient(
      120deg, ${P.lightenedTheme}, ${P.themeColor}
    );
    color: ${P.fadedWhite};
  }

  button {
    text-decoration: none;
    border: none;
  }

  button:focus {
    outline: none;
  }

  button:active {
    border-style: none;
  }

  section {
    width: 100%;
    padding: 50px 40px 0 40px;
    display: flex;
    flex-direction: column;
  }
`

const Main = styled.main`
  width: 100%;
  min-height: 90vh;
  max-width: 900px;
  margin: 0 auto;
  background: ${P.white};
  border-radius: ${P.borderRadius};
  box-shadow: 0 0 5px 1px ${P.boxShadow};
  color: ${P.black};
`


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
