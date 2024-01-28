import React, { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const BackArrow = styled.div`
  margin-top: 15px;
  border: solid ${(props) => props.theme.textColor};
  border-width: 0 20px 20px 0;
  padding: 10px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`

const BackLink: FC = (): ReactElement => {
  return (
    <Container>
      <Link style={{ textDecoration: 'none' }} to="/">
        <BackArrow />
      </Link>
    </Container>
  )
}

export { BackLink }
