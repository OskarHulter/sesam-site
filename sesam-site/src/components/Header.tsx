import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${props => props.theme.secondColor};
  min-height: 20vh;
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
