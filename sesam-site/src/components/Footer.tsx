import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: ${props => props.theme.secondColor};
  min-height: 15vh;
`

export const Footer: React.FC = props => (
  <StyledFooter>
    © {new Date().getFullYear()}, Built by Oskar Hulter
  </StyledFooter>
)
