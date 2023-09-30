import React from 'react'
import { Outlet } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from './Header'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${ props => props.theme.main };
    color: ${ props => props.theme.textColor };
    transition: .3s ease;
    height: 100%;
    padding: 0;
    margin: 0;
  }
`

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`

function Layout() {
	return (
		<Container>
			<Header />
			<Outlet />
			<GlobalStyles />
		</Container>
	)
}

export { Layout }
