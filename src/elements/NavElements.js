import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1/2;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-column: 2 / span6;
  }
`

export const NavImage = styled.img`
  height: 100px;
`
