import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
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
