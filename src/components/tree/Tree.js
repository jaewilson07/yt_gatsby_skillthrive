import React, { useState, useEffect } from "react"

import TreeNode from "./TreeNode.js"

import {
  IGNORE_INDEX,
  GATSBY_TRAILINGSLASH,
  SIDEBAR_FRONTLINE,
} from "../../config"

const calculateTreeData = edges => {
  const originalData = IGNORE_INDEX
    ? edges.filter(
        ({
          node: {
            fields: { slug },
          },
        }) => slug !== "/"
      )
    : edges

  console.log(originalData)

  const tree = originalData.reduce(
    (
      accu,
      {
        node: {
          fields: { slug },
          frontmatter: { title },
        },
      }
    ) => {
      const parts = slug.split("/")

      let { items: prevItems } = accu

      const slicedParts = GATSBY_TRAILINGSLASH
        ? parts.slice(1, -2)
        : parts.slice(1, -1)

      for (const part of slicedParts) {
        let tmp = prevItems && prevItems.find(({ label }) => label === part)

        if (tmp) {
          if (!tmp.items) {
            tmp.items = []
          }
        } else {
          tmp = { label: part, items: [] }
          prevItems.push(tmp)
        }
        prevItems = tmp.items
      }
      const slicedLength = GATSBY_TRAILINGSLASH
        ? parts.length - 2
        : parts.length - 1

      const existingItem = prevItems.find(
        ({ label }) => label === parts[slicedLength]
      )

      if (existingItem) {
        existingItem.url = slug
        existingItem.title = title
      } else {
        prevItems.push({
          label: parts[slicedLength],
          url: slug,
          items: [],
          title,
        })
      }
      return accu
    },
    { items: [] }
  )

  // const {
  //   sidebar: { forcedNavOrder = [] },
  // } = config

  const tmp = []

  if (GATSBY_TRAILINGSLASH) {
  }
  tmp.reverse()

  return tmp.reduce((accu, slug) => {
    const parts = slug.split("/")

    let { items: prevItems } = accu

    const slicedParts = GATSBY_TRAILINGSLASH
      ? parts.slice(1, -2)
      : parts.slice(1, -1)

    for (const part of slicedParts) {
      let tmp = prevItems.find(item => item && item.label === part)

      if (tmp) {
        if (!tmp.items) {
          tmp.items = []
        }
      } else {
        tmp = { label: part, items: [] }
        prevItems.push(tmp)
      }
      if (tmp && tmp.items) {
        prevItems = tmp.items
      }
    }
    // sort items alphabetically.
    prevItems.map(
      item =>
        (item.items = item.items.sort(function (a, b) {
          if (a.label < b.label) return -1
          if (a.label > b.label) return 1
          return 0
        }))
    )
    const slicedLength = GATSBY_TRAILINGSLASH
      ? parts.length - 2
      : parts.length - 1

    const index = prevItems.findIndex(
      ({ label }) => label === parts[slicedLength]
    )

    if (prevItems.length) {
      accu.items.unshift(prevItems.splice(index, 1)[0])
    }
    return accu
  }, tree)
}

/// ********************************************************** ///
const useStickyState = (key = "sticky", initialState = null) => {
  const [state, setState] = useState(() => {
    const storedState = localStorage.getItem(key)

    return storedState ?? initialState
  })

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [state])

  const clearState = () => localStorage.removeItem(key)

  return [state, setState, clearState]
}

export const Tree = ({ edges }) => {
  let [treeData] = useState(() => {
    return calculateTreeData(edges)
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
