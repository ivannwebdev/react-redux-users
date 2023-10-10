import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`
const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
`
const NavItem = styled.span`
  &:hover {
    color: #8c8989
  }
`
function Navbar() {
  const navItems = [
    { name: 'Home', link: '/' }
  ]

  return (
    <Container>

      <Navigation>
        {
          navItems
            .map(
              item => (
                <NavLink
                  to={item.link}
                  style={{ textDecoration: 'none', color: 'white' }}
                  key={`${item.name}`}
                >
                  <NavItem> {item.name} </NavItem>
                </NavLink>
              )
            )
        }
      </Navigation>

    </Container>
  )
}

export { Navbar }
