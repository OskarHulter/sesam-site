import React from "react"
import styled from "styled-components"

import { Image } from "./Image"
import { Button } from "./Button"

const StyledPage = styled.div`
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PageContainer = styled.div`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
`

export const ThirdPage: React.FC = props => (
  <StyledPage>
    <PageContainer>
      <ListContainer>
        <h3>Rekommenderat upplägg:</h3>
        <ul>
          <li>Tre inledande besök som utvärderas.</li>
          <li>Vidare kontakt eller hänvisning.</li>
          <li>Ytterligare besök planeras vid behov.</li>
          <li>Privata försäkringar kan stödja detta upplägg.</li>
        </ul>
      </ListContainer>

      <p>Ta kontakt via mail eller telefon:</p>
      <ButtonContainer>
        <Button>Mail</Button>
        <Button>Telefon</Button>
      </ButtonContainer>
      <h4>Övrig information</h4>
      <p>mer info</p>
    </PageContainer>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </StyledPage>
)
