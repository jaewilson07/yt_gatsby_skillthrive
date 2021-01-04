import React from "react"

export const TableOfContents = ({ items }) => (
  <details>
    <summary>Table of Contents</summary>
    <ol>
      {items.map(item => (
        <li key={item.url}>
          <a href={item.url}>{item.title} </a>
        </li>
      ))}
    </ol>
  </details>
)
