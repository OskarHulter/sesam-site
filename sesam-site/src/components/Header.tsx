import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  grid-area: header;
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.backgroundColor};
  font-family: ${props => props.theme.primaryFont};
  max-height: 0.5em;
`

export const Header: React.FC = props => (
  <StyledHeader>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    ></Link>
  </StyledHeader>
)
