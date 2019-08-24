import React from "react"
import styled from "styled-components"

const StyledLogo = styled.div`
  color: ${props => props.theme.primaryColor};
  font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
  }
`

export const Logo: React.FC = props => (
  <StyledLogo>
    <h1>SESAM AB</h1>
  </StyledLogo>
)
