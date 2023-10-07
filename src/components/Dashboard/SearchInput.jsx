import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  min-width: 10vw;
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  border: 1px solid ${ props => props.theme.name === 'dark' ? 'white' : 'grey' };
  background-color: ${ props => props.theme.name === 'dark' ? 'grey' : 'white' };
  color: ${ props => props.theme.textColor };

  &::placeholder {
	  color: ${ props => props.theme.name === 'dark' ? 'lightgrey' : 'grey' };
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${ props => props.theme.name === 'dark' ? 'rgb(214, 239, 248)' : 'blue' };
  }
`

function SearchInput({ value, onChange }) {
  return (
    <Input
      placeholder="Enter username"
      type="search"
      value={value}
      onChange={onChange}
    />
  )
}

export { SearchInput }
