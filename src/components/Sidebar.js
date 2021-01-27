import React from "react"

// import Link from './link';
import { TableOfContents, Tree } from "../components"
import { SidebarWrapper } from "../elements"

const SIDEBAR_TITLE = "My Blog"

export const Sidebar = ({ edges }) => {
  return (
    <SidebarWrapper>
      <div
        className={"sidebarTitle hiddenMobile"}
        dangerouslySetInnerHTML={{ __html: SIDEBAR_TITLE }}
      />
      <Tree edges={edges} />
    </SidebarWrapper>
  )
}

export const RightSidebar = ({ items, title }) => {
  console.log(items, "items")

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
