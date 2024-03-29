import React from "react"
import styled from "styled-components"

import { Image } from "./Image"

const StyledPage = styled.div`
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SecondPageContainer = styled.div`
  width: 60vw;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  li {
    margin: 0;
    padding: 0;
  }
  h3 {
    margin: 0;
    padding: 0;
  }
`

export const SecondPage: React.FC = props => (
  <StyledPage>
    <SecondPageContainer>
      <h2>Varför ta kontakt?</h2>
      <p>
        Lorem ipsum dolor amet umami roof party thundercats, fingerstache chia
        next level Flannel blog cold-pressed synth.
      </p>
      <p>
        Gentrify wolf food truck palo santo typewriter yr stumptown ugh. Fanny
        pack iPhone man braid pitchfork mlkshk.
      </p>
      <ListContainer>
        <h3>Du får:</h3>
        <ul>
          <li>Tystnadsplikt</li>
          <li>Anpassade tider</li>
          <li>Auktoriserad sexolog</li>
          <li>Privat och diskret</li>
          <li>Tacksamma kunder</li>
          <li>Lång erfarenhet</li>
        </ul>
      </ListContainer>
    </SecondPageContainer>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </StyledPage>
)
