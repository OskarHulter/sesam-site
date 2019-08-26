import React from "react"
import styled from "styled-components"

import { Button } from "./Button"
import { Logo } from "./Logo"

const StyledMain = styled.main`
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
  min-width: 100vw;
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
  width: 60vw;
  h2 {
    font-size: 1em;
    margin: 0.1em 0;
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
        Mottagningar för råd och behandling i Stockholm, Uppsala och via
        telefon.
      </p>
      <p>Frågor och tidsbokning via mail och telefon.</p>
      <ButtonContainer>
        <Button>Mail</Button>
        <Button>Telefon</Button>
      </ButtonContainer>
    </LandingContainer>
  </StyledMain>
)
