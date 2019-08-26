import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  grid-area: footer;
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.secondaryColor};
  min-height: 5vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer: React.FC = props => (
  <StyledFooter>© {new Date().getFullYear()} Birgitta Hulter</StyledFooter>
)
