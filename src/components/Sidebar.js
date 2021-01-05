import React from "react"

// import Link from './link';
import { TableOfContents } from "../components"
import { SidebarWrapper } from "../elements"

const SIDEBAR_TITLE = "My Blog"

export const Sidebar = () => (
  <SidebarWrapper>
    {SIDEBAR_TITLE ? (
      <div
        className={"sidebarTitle hiddenMobile"}
        dangerouslySetInnerHTML={{ __html: SIDEBAR_TITLE }}
      />
    ) : (
      <div />
    )}
  </SidebarWrapper>
)

export const RightSidebar = ({ items, title }) => {
  console.log(items)
  return items && items.length > 0 ? (
    <SidebarWrapper>
      <TableOfContents items={items} title={title} />
    </SidebarWrapper>
  ) : (
    <SidebarWrapper>
      <ul></ul>
    </SidebarWrapper>
  )
}
