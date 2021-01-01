//https://scottspence.com/2020/02/06/globally-style-gatsby-styled-components/

import React from "react"

import { ThemeProvider } from "styled-components"

import Theme from "./src/themes/theme"
import { GlobalStyles } from "./src/themes/global-style"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
