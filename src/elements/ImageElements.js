import styled from "styled-components"
import Img from "gatsby-image"

export const FeatureImageWrapper = styled.div`
  grid-column: 3 / span 10;
  grid-row: 2 / 4;
  overflow: hidden;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const StyledGatsbyImage = styled(Img)`
  position: absolute;
  left: 0;
  top: 0;

  min-width: 100%;
  min-height: 100%;
`
