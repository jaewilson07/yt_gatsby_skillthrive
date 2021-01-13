import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"

import { Nav } from "../components"

export const Header = () => {
  const [currentHeading, setCurrentHeading] = useState("home")

  const {
    file: logo,
    site: {
      siteMetadata: { navbar },
    },
  } = useStaticQuery(headerQuery)

  return (
    <HeaderWrapper className="header">
      <Link className="header__logo" to="http://www.onyxreporting.com">
        <HeaderImage src={logo.publicURL} alt="Onyx Logo" />
      </Link>
      <Nav
        className="header__navbar"
        navbar={navbar}
        currentHeading={currentHeading}
        setCurrentHeading={setCurrentHeading}
      />
    </HeaderWrapper>
  )
}

const headerQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        navbar {
          id
          title
          isPage
        }
      }
    }
    file(relativePath: { eq: "logo.svg" }) {
      publicURL
    }
  }
`

const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: space-between;

  .header__logo {
    width: 25%;

    img {
      background-color: white;
    }
  }
  .header__navbar {
    width: 100%;
  }
`

const HeaderImage = styled.img`
  max-height: 100%;
`
