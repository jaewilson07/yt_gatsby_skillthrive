//http://nickymeuleman.netlify.app/blog/table-of-contents#starting-point

import React from "react"
import { ListItem } from "../elements"

export const TableOfContents = ({ items, title }) => (
  <ol className={"rightSideBarUL"}>
    <li className={"rightSideTitle"}>{title ? title : "Contents"}</li>
    {items.map(item => (
      <ListItem key={item.url} level={1}>
        <a href={item.url}>{item.title} </a>
      </ListItem>
    ))}
  </ol>
)
