import React from "react"
import styled from "styled-components"

import { Header } from "./Header"
import { Footer } from "./Footer"
import { Main } from "./Main"
import { SecondPage } from "./SecondPage"

const LayoutGrid = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";
  grid-template-columns: repeat(3, 1fr);
  min-height: 100vh;
`

export const Layout: React.FC = props => (
  <LayoutGrid>
    <Header />
    <Main />
    <SecondPage />
    <Footer />
  </LayoutGrid>
)
