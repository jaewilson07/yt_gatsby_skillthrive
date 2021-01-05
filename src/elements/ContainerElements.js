import styled from "styled-components"

export const ContainerWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`

export const ContentWidthWrapper = styled("div")`
  @media only screen and (max-width: 50rem) {
    max-width: 750px;
    position: relative;
    flex: 1 0 auto;
  }
`

export const LeftSideBarWrapper = styled("div")`
  flex: 1 0 298px;
`

export const RightSideBarWrapper = styled("div")`
  flex: 1 0 224px;
`
