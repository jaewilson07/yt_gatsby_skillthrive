import React from "react"
import styled from "styled-components"

import { Sidebar, Content, RightSidebar } from "."

export const PostContainerWrapper = styled("div")`
  height: 100%;

  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.light2};

  @media only screen and (max-width: 767px) {
    display: block;
  }
`

export const ContentWidthWrapper = styled("div")`
  @media only screen and (max-width: 50rem) {
    max-width: 750px;
    flex: 1 0 auto;
  }
`

export const LeftSideBarWrapper = styled("div")`
  overflow: hidden;
  flex: 1 0 224px;
`

export const RightSideBarWrapper = styled("div")`
  overflow: hidden;
  flex: 1 0 224px;
`

export const PostContainer = ({ items, children, title }) => {
  console.log(items, children)
  return (
    <PostContainerWrapper>
      <LeftSideBarWrapper className={"hiddenMobile"}>
        <Sidebar />
      </LeftSideBarWrapper>

      <ContentWidthWrapper>
        <Content>{children}</Content>
      </ContentWidthWrapper>
      <RightSideBarWrapper className={"hiddenMobile"}>
        <RightSidebar items={items} title={title} />
      </RightSideBarWrapper>
    </PostContainerWrapper>
  )
}
