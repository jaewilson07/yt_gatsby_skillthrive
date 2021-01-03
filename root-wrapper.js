//https://scottspence.com/2020/02/06/globally-style-gatsby-styled-components/

import React from "react"

import { ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"

import Theme from "./src/themes/theme"
import { GlobalStyles } from "./src/themes/global-style"
import "./src/themes/language-tabs.css"

import { Table, Code } from "./src/components"

const components = {
  table: Table,
  pre: preProps => {
    const props = preToCodeBlock(preProps)

    if (props) {
      return <Code {...props} />
    }
    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
)
