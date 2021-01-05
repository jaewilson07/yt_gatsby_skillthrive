import React from "react"

import { Sidebar, Content, RightSidebar } from "../components"

import {
  ContainerWrapper,
  ContentWidthWrapper,
  LeftSideBarWrapper,
  RightSideBarWrapper,
} from "../elements"

export const Container = ({ items, children }) => {
  console.log(items, children)
  return (
    <ContainerWrapper>
      <LeftSideBarWrapper className={"hiddenMobile"}>
        <Sidebar />
      </LeftSideBarWrapper>

      <ContentWidthWrapper>
        <Content>{children}</Content>
      </ContentWidthWrapper>
      <RightSideBarWrapper className={"hiddenMobile"}>
        <RightSidebar items={items} />
      </RightSideBarWrapper>
    </ContainerWrapper>
  )
}

export default Container
