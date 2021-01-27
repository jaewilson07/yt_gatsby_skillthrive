import React, { useState } from "react"

import TreeNode from "./TreeNode.js"
import { calculateTreeData, useStickyState } from "./treeUtils"

import { SIDEBAR_FRONTLINE } from "../../config"

export const Tree = ({ edges }) => {
  let [treeData] = useState(() => {
    const data = calculateTreeData(edges)
    return data
  })

  // set default collapsed for each URL to true
  const defaultCollapsed = {}
  treeData.items.forEach(item => {
    defaultCollapsed[item.url] = true
  })

  console.log(treeData, "tree data")

  const [collapsed, setCollapsed] = useStickyState("collapse", defaultCollapsed)

  const toggle = url => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    })
  }

  return (
    <TreeNode
      className={`${
        SIDEBAR_FRONTLINE ? "showFrontLine" : "hideFrontLine"
      } firstLevel`}
      toggle={toggle}
      collapsed={collapsed}
      {...treeData}
    />
  )
}
export default Tree
