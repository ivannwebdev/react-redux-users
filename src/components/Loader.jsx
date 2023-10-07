import React from 'react'
import  styled, { keyframes } from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: ${ props => props.theme.main };
`

const spin = keyframes`
  from {
	  transform: rotate(0deg);
  }

  to {
	  transform: rotate(360deg);
  }
`

const Preloader = styled.div`
  border: ${ props => props.$small ? '8px' : '16px' } solid lightgrey;
  border-top:${props => props.$small ? '8px' : '16px'}  solid rgb(50, 104, 190);
  width: ${ props => props.$small ? '60px' : '120px' };
  height: ${ props => props.$small ? '60px' : '120px' };
  border-radius: 50%;

  animation: ${spin} 2s linear infinite;
`

function Loader({ $small }) {
  return (
    <Container>
      <Preloader $small={$small} />
    </Container>
  )
}

export { Loader }
