import React from "react"
import styled from "styled-components"

import { Header } from "./Header"
import { Footer } from "./Footer"
import { Main } from "./Main"

const LayoutGrid = styled.div`
  --color-primary: ${props => props.theme.secondColor};
  display: grid;
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";
  grid-template-columns: repeat(3, 1fr);
  max-height: 100vh;
`

export const Layout: React.FC = props => (
  <LayoutGrid>
    <Header />
    <Main />
    <Footer />
  </LayoutGrid>
)
