import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar.tsx'
import { Theme } from './Theme/Theme.tsx'

const Container = styled.header`
  position: sticky;
  top: 0;
  background-color: rgb(10, 82, 198);
  display: flex;
  justify-content: space-between;
  height: 70px;
`

const Header: FC = (): ReactElement => {
  return (
    <Container>
      <Navbar />
      <Theme />
    </Container>
  )
}

export { Header }
