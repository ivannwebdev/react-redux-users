import React, { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './Header.tsx'

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`

const Layout: FC = (): ReactElement => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}

export { Layout }
