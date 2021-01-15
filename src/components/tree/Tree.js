import React, { useState } from "react"

import TreeNode from "./TreeNode.js"
import { calculateTreeData, useStickyState } from "./treeUtils"

import { SIDEBAR_FRONTLINE } from "../../config"

export const Tree = ({ edges }) => {
  let [treeData] = useState(() => {
    const data = calculateTreeData(edges)
    console.log("edges in tree", data)
    return data
  })

  const defaultCollapsed = {}

  treeData.items.forEach(item => {
    defaultCollapsed[item.url] = true
  })

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
      setCollapsed={toggle}
      collapsed={collapsed}
      {...treeData}
    />
  )
}
export default Tree
