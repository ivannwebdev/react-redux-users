import React, { FC, ReactElement } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { PublicRoutes } from '../../router/index.ts'

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
  color: lightgrey;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #8c8989
  }
`
const Navbar: FC = (): ReactElement => {
  const navigate = useNavigate()

  return (
    <Container>

      <Navigation>
        {
          PublicRoutes
            .map(
              item => (
                item.title !== 'POSTS' &&
                <NavItem onClick={() => navigate(item.path)}>
                  {item.title}
                </NavItem>
              )
            )
        }
      </Navigation>

    </Container>
  )
}

export { Navbar }
