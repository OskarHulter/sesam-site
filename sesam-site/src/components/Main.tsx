import React from "react"
import styled from "styled-components"

import { Button } from "./Button"
import { Image } from "../components/Image"
import { Logo } from "./Logo"

const StyledMain = styled.main`
  grid-area: main;
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 20vh;
  width: 40vw;
  h2 {
    font-size: 1em;
    margin: 0.2em 0;
  }
  p {
    margin: 0.5em 0;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
`

export const Main: React.FC = props => (
  <StyledMain>
    <LandingContainer>
      <Logo />
      <h2>Sexuellt välbefinnande</h2>
      <p>
        Lorem ipsum dolor amet umami roof party thundercats, fingerstache chia
        next level Flannel blog cold-pressed synth.
      </p>
      <p>
        Gentrify wolf food truck palo santo typewriter yr stumptown ugh. Fanny
        pack iPhone man braid pitchfork mlkshk.
      </p>
      <ButtonContainer>
        <Button />
        <Button />
      </ButtonContainer>
    </LandingContainer>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </StyledMain>
)
