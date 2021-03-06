import React from "react"
import OpenedSvg from "../../images/opened"
import ClosedSvg from "../../images/closed"

import { Link as GatsbyLink } from "gatsby"
import isAbsoluteUrl from "is-absolute-url"

const Link = ({ to, ...props }) => {
  // return hasChildren ? (
  //   <a>{props.children}</a>
  // ) : (
  //   <GatsbyLink to={to} {...props} />
  // )

  return isAbsoluteUrl(to) ? (
    <a href={to} {...props}>
      {props.children}
    </a>
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
      {url ? <Link to={url}>{title}</Link> : "My Blog"}
      {hasChildren && (
        <button
          onClick={() => toggle(url)}
          aria-label="collapse"
          className="collapser"
        >
          {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
        </button>
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
