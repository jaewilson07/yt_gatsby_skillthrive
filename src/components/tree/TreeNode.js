import React from "react"
import OpenedSvg from "../../images/opened"
import ClosedSvg from "../../images/closed"

import { Link as GatsbyLink } from "gatsby"
import isAbsoluteUrl from "is-absolute-url"

import { SIDEBAR_FRONTLINE } from "../../config"

const Link = ({ to, hasChildren, ...props }) => {
  return hasChildren ? (
    <a>{props.children}</a>
  ) : (
    <GatsbyLink to={to} {...props} />
  )
}

const TreeNode = ({
  className = "",
  toggle,
  collapsed,
  url,
  title,
  items,
  ...rest
}) => {
  const isCollapsed = collapsed[url]
  const hasChildren = items.length !== 0

  let location
  if (typeof document != "undefined") {
    location = document.location
  }

  const active =
    location && (location.pathname === url || location.pathname === url)

  const calculatedClassName = `${className} item ${active ? "active" : ""}`

  return (
    <li className={calculatedClassName}>
      {title && (
        <Link to={url} hasChildren={hasChildren}>
          {url}
          {!SIDEBAR_FRONTLINE && title && hasChildren ? (
            <button
              onClick={() => toggle(url)}
              aria-label="collapse"
              className="collapser"
            >
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              toggle={toggle}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

export default TreeNode
