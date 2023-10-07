import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 5px 0 5px;
  padding: 0 10px 0 10px;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid darkgray;
 }
`
const ArrowIcon = styled.div`
  margin-top: 15px;
  border: 1px solid ${ props => props.theme.textColor };
  border-width: 0 3px 3px 0;
  padding: 10px;
  transform: ${ props => props.$right ? 'rotate(-45deg)' : 'rotate(135deg)' };
  -webkit-transform: ${ props => props.$right ? 'rotate(-45deg)' : 'rotate(135deg)' };
`

function Arrow({ $right, onClick }) {
  return (
    <Container onClick={onClick}>
      <ArrowIcon $right={$right} />
    </Container>
  )
}

export { Arrow }
