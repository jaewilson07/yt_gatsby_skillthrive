import { useState, useEffect } from "react"

import { IGNORE_INDEX, GATSBY_TRAILINGSLASH } from "../../config"

export const calculateTreeData = edges => {
  let originalData = []

  //populate the parent node
  edges.forEach(({ node }) => {
    const {
      fields: { parent_page },
    } = node

    originalData.push({
      fields: { slug: `/${parent_page}` },
      frontmatter: { title: parent_page },
    })

    originalData.push(node)
  })

  originalData = IGNORE_INDEX
    ? originalData.filter(
        ({
          node: {
            fields: { slug },
          },
        }) => slug !== "/"
      )
    : originalData

  const tree = originalData.reduce(
    (accu, { fields: { slug, parent_page }, frontmatter: { title } }) => {
      // for each edge, identify the parent node
      const parts = slug.split("/").filter(split => split !== "")

      const slicedParts = GATSBY_TRAILINGSLASH
        ? parts.slice(0, -2)
        : parts.slice(0, -1)

      let { items: prevItems } = accu

      slicedParts.forEach(part => {
        let tmp =
          prevItems &&
          prevItems.find(({ label }) => {
            return label === part
          })

        if (tmp) {
          if (!tmp.items) {
            tmp.items = []
          }
        } else {
          tmp = { label: part, items: [] }
          prevItems.push(tmp)
        }
        prevItems = tmp.items
      })

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
          url: `/${slug}`,
          items: [],
          title,
        })
      }
      return accu
    },
    { items: [] }
  )

  const tmp = []

  tmp.reverse()

  return tmp.reduce((accu, slug) => {
    const parts = slug.split("/")

    let { items: prevItems } = accu

    const slicedParts = GATSBY_TRAILINGSLASH
      ? parts.slice(1, -2)
      : parts.slice(1, -1)

    slicedParts.forEach(part => {
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
    })
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

//https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/
export const useStickyState = (key = "sticky", defaultValue = null) => {
  const [value, setValue] = useState(() => {
    const stickyValue = localStorage.getItem(key)

    const result = JSON.parse(stickyValue) ?? defaultValue
    console.log(result, "the state", defaultValue, stickyValue, "the key", key)
    return result
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  const clearState = () => localStorage.removeItem(key)

  return [value, setValue, clearState]
}
