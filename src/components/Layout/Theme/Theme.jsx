import React from 'react'
import styled, { useTheme } from 'styled-components'
import { useActions } from '../../../hooks/useActions'
import { Moon } from './Moon'
import { Sun } from './Sun'

const Container = styled.div`
  padding: 1rem;
`
const Input = styled.input.attrs({
  type: 'checkbox',
  id: 'theme-toggle',
})`
  display: none;

  & + label {
    background: rgb(185, 181, 181);
  }

  &:checked + label {
    background: rgb(74, 74, 74);

    &::after {
      content: '';
      left: 125px;
      top: 3px;
      transform: translateX(-50px);
      background: linear-gradient(180deg, #777, #3a3a3a);
    }
  }
`
const Label = styled.label.attrs({
  for: 'theme-toggle',
})`
  width: 125px;
  height: 50px;
  position: relative;
  display: block;
  top: -5;
  border-radius: 50px;
  box-shadow:
    inset 0 5px 15px rgba(0, 0, 0, 0.4),
    inset 0 -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;

  &::after {
    content: '';
    width: 45px;
    height: 45px;
    position: absolute;
    top: 3px;
    left: 5px;
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 100%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
`

function Theme() {
  const theme = useTheme()
  const { setTheme } = useActions()
  const isDark = theme.name === 'dark'

  function toggleTheme() {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Container>
      <Input
        onChange={toggleTheme}
        checked={isDark}
      />
      <Label>
        <Sun/>
        <Moon/>
      </Label>
    </Container>
  )
}

export { Theme }
