import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import { NavImage, NavWrapper } from "../elements"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <NavWrapper>
      <Link to="/">
        <NavImage src={data.logo.publicURL} alt="Onyx Logo" />
      </Link>
    </NavWrapper>
  )
}
