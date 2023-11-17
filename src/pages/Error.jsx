import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20vh;
  align-items: center;
  font-weight: 600;
  font-size: 25px;
  letter-spacing: 1.3;
  width: 60vw;
  height: 70vh;
  border: 1px solid ${ props => props.theme.textColor };
  box-shadow: 0 0 5px red;
  background-color: red;
`

function Error({ message }) {
  return (
    <Container>
      <Text>
        <h3>ERROR</h3>

        {message}
      </Text>
    </Container>
  )
}

export { Error }
