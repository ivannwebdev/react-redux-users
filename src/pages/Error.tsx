import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import React, { FC, ReactElement } from 'react'
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
  border: 1px solid ${(props) => props.theme.textColor};
  box-shadow: 0 0 5px red;
  background-color: red;
`
type Props = {
  error: SerializedError | FetchBaseQueryError | undefined
}

const Error: FC<Props> = ({ error }): ReactElement => {
  if (error) {
    if ('status' in error) {
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      return (
        <Container>
          <Text>
            <h3>ERROR</h3>

            {errMsg}
          </Text>
        </Container>
      )
    } else {
      return <div>{error.message}</div>
    }
  }

  return <Container>Oops ;(</Container>
}

export { Error }
