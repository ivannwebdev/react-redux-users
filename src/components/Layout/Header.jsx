import React from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar'
import { Theme } from './Theme/Theme'

const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: rgb(10, 82, 198);
  color: white;
  display: flex;
  justify-content: space-between;
  height: 70px;
`

function Header() {
	return (
		<Container>
			<Navbar />
			<Theme />
		</Container>
	)
}

export { Header }
