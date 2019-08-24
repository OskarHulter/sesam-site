import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout } from "./Layout"
import { GlobalStyle } from "./GlobalStyle"

const roboto = '"Roboto", -apple-system, "Segoe UI", Roboto, sans-ser'
const green = "#025952"
const red = "#F1523E"
const beige = "#FAE3BA"
const orange = "#F27B35"
const yellow = "#FCA521"

const theme = {
  backgroundColor: beige,
  primaryColor: green,
  secondaryColor: red,
  accentColor: orange,
  warningColor: yellow,
  fontColor: green,
  primaryFont: roboto,
  secondaryFont: roboto,
}

export const Theme: React.FC = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Layout />
    </>
  </ThemeProvider>
)
