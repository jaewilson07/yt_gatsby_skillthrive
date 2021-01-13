import React from "react"
import styled from "styled-components"

export const ContentWrapper = styled.main`
  flex-grow: 1;
  height: 100%;
  overflow-y: auto; /*adds scroll to this container*/

  display: flex;
  background-color: ${({ theme }) => theme.colors.light2};

  padding: ${({ theme }) =>
    `${theme.spacings.xLarge} ${theme.spacings.xxLarge}`};
`

export const Content = ({ children }) => {
  return <ContentWrapper>{children}</ContentWrapper>
}
