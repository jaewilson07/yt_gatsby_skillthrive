//http://nickymeuleman.netlify.app/blog/table-of-contents#starting-point

import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import { ListItem } from "../elements"

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1))
    }
    if (item.items) {
      acc.push(...getIds(item.items))
    }
    return acc
  }, [])
}
function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(``)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )
    itemIds.forEach(id => {
      observer.observe(document.getElementById(id))
    })
    return () => {
      itemIds.forEach(id => {
        observer.unobserve(document.getElementById(id))
      })
    }
  }, [itemIds])

  return activeId
}

const renderItems = (items, level, activeId) => {
  return (
    <ol>
      {items.map(item => {
        const active = activeId === item.url.slice(1)

        return (
          <ListItem key={item.url} level={level} to={item.url} active={active}>
            <Link href={item.url}>{item.title} </Link>
            {item.items && renderItems(item.items, level + 1, activeId)}
          </ListItem>
        )
      })}
    </ol>
  )
}

export const TableOfContents = ({ items, title }) => {
  const idList = getIds(items)
  const activeId = useActiveId(idList)

  return (
    <ul className={"rightSideBarUL"}>
      <li className={"rightSideTitle"}>{title ? title : "Contents"}</li>
      {renderItems(items, 1, activeId)}
    </ul>
  )
}
