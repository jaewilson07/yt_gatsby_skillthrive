import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 3 / span 5;

  background-color: ${({ theme }) => theme.colors.light2};
  z-index: 10;

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
