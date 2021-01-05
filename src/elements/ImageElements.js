import styled from "styled-components"
import Img from "gatsby-image"

export const FeatureImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
`

export const StyledGatsbyImage = styled(Img)`
  position: absolute;
  left: 0;
  top: 0;

  min-width: 100%;
  min-height: 100%;
`
