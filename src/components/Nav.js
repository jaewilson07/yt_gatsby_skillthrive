import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export const Nav = ({ navbar, currentHeading, setCurrentHeading }) => {
  return (
    <NavWrapper>
      <ul>
        {navbar.map(heading => (
          <li
            key={heading.id}
            className={`nav-tab ${
              currentHeading === heading.id ? "current" : undefined
            }`}
            onClick={() => setCurrentHeading(heading.id)}
          >
            <Link to={`${heading.isPage ? "/" : ""}${heading.id}`}>
              {heading.title}
            </Link>
          </li>
        ))}
      </ul>
    </NavWrapper>
  )
}

export const NavWrapper = styled.nav`
  width: 75%;
  display: flex;
  justify-content: flex-end;

  align-items: center;

  li {
    list-style: none;
    display: inline-block;
    margin: 0;

    a,
    a:visited {
      display: inline-block;
      padding: 0px 13px;
      line-height: 32px;
      text-align: left;
      font-size: 1.35rem;

      -webkit-transition: color 0.2s ease-in-out;
      -moz-transition: color 0.2s ease-in-out;
      -o-transition: color 0.2s ease-in-out;
      -ms-transition: color 0.2s ease-in-out;
      transition: color 0.2s ease-in-out;

      color: ${props => props.theme.colors.header.text};

      &:active {
        background-color: transparent !important;
      }
    }

    a:hover {
      color: ${props => props.theme.colors.header.text_hover};
    }
  }
`
