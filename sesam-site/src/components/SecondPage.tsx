import React from "react"
import styled from "styled-components"

import { Image } from "./Image"

const StyledPage = styled.div`
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.backgroundColor};
  max-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SecondPageContainer = styled.div`
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

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
`

export const SecondPage: React.FC = props => (
  <StyledPage>
    <SecondPageContainer>
      <h2>Varför bör man ta kontakt?</h2>
      <p>
        Lorem ipsum dolor amet umami roof party thundercats, fingerstache chia
        next level Flannel blog cold-pressed synth.
      </p>
      <p>
        Gentrify wolf food truck palo santo typewriter yr stumptown ugh. Fanny
        pack iPhone man braid pitchfork mlkshk.
      </p>
      <ListContainer></ListContainer>
    </SecondPageContainer>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </StyledPage>
)
