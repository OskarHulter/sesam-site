import React from "react"
import { ThemeProvider } from "styled-components"
import { Layout } from "./Layout"
import { GlobalStyle } from "./GlobalStyle"

const roboto = '"Roboto", -apple-system, "Segoe UI", Roboto, sans-ser'
const freshBlue = "#2CBDEC"
const malachiteGreen = "#0C7C31"

const theme = {
  firstColor: freshBlue,
  secondColor: malachiteGreen,
  font: roboto,
}

export const Theme: React.FC = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Layout />
    </>
  </ThemeProvider>
)
