import React from "react"
import styled from "styled-components"

import { Button } from "./Button"
import { Image } from "../components/Image"

const StyledMain = styled.main`
  grid-area: main;
  background-color: ${props => props.theme.firstColor};
  min-height: 65vh;
`

export const Main: React.FC = props => (
  <StyledMain>
    <h4>This is the content</h4>
    <Button />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </StyledMain>
)
