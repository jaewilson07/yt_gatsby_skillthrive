import React from "react"
import styled from "styled-components"
import { Footer, Header } from "../components"

export const Layout = ({ children }) => (
  <LayoutWrapper>
    <HeaderWrapper className="layout__header">
      <Header />
    </HeaderWrapper>
    <Main>{children}</Main>
    <FooterWrapper>
      <Footer />
    </FooterWrapper>
  </LayoutWrapper>
)

const LayoutWrapper = styled.div`
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`

const HeaderWrapper = styled.div`
  height: 5rem;
  flex-shrink: 0;

  background-color: #2b2b2b;
`

const Main = styled.div`
  height: 100%;
  overflow: hidden;
`

const FooterWrapper = styled.footer`
  flex-shrink: 0;

  min-height: 5rem;
  padding: 1rem 0;
  display: flex;

  justify-content: center;
  align-items: flex-start;
`
