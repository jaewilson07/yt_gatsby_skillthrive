import React from "react"

import { TableWrapper } from "../elements"

export const Table = ({ children }) => (
  <TableWrapper>
    <table>{children}</table>
  </TableWrapper>
)
