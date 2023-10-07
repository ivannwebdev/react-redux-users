import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.nav`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
`
const NavItem = styled.span`
  &:hover {
    color: #8c8989
  }
`
function Navbar() {
  return (
    <Container>
      <NavLink
        to='/'
        style={{ textDecoration: 'none', color: 'white' }}
      >
        <NavItem>
          Home
        </NavItem>
      </NavLink>
    </Container>
  )
}

export { Navbar }
