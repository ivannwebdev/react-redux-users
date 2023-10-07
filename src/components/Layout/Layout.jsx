import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './Header'

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`

function Layout() {
	return (
		<Container>
			<Header />
			<Outlet />
		</Container>
	)
}

export { Layout }
