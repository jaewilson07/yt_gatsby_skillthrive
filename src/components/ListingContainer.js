import styled from "styled-components"

import React from "react"

const ListingContainer__Wrapper = styled.main`
  flex-grow: 1;
  height: 100%;
  overflow-y: auto; /*adds scroll to this container*/

  background-color: ${({ theme }) => theme.colors.light2};

  padding: ${({ theme }) =>
    `${theme.spacings.xLarge} ${theme.spacings.xxLarge}`};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: ${({ theme }) =>
      `${theme.spacings.medium} ${theme.spacings.large}`};
  }
`

export const ListingContainer = ({ children }) => (
  <ListingContainer__Wrapper>{children}</ListingContainer__Wrapper>
)
