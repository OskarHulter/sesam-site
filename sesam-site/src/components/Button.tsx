import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: ${props => props.theme.primaryColor};
  :hover {
    color: ${props => props.theme.primaryColor};
  }
  background-color: ${props => props.theme.secondaryColor};
  cursor: pointer;
  border: none;
  transition: 800ms ease all;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vmin;
  height: 10vmin;
  margin: 2vmin;
  font-size: 6vmin;
  padding-bottom: 3px;
  border-radius: 2%;
`

interface ButtonProps {
  handleClick?: void
}

export const Button: React.FC<ButtonProps> = props => {
  const { handleClick } = props
  return (
    <StyledButton onClick={() => handleClick}>{props.children}</StyledButton>
  )
}
