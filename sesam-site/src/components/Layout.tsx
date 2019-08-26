import React from "react"
import styled from "styled-components"

import { Header } from "./Header"
import { Footer } from "./Footer"
import { Main } from "./Main"
import { SecondPage } from "./SecondPage"
import { ThirdPage } from "./ThirdPage"

const LayoutGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`

export const Layout: React.FC = props => (
  <LayoutGrid>
    <Header />
    <Main />
    <SecondPage />
    <ThirdPage />
    <Footer />
  </LayoutGrid>
)
