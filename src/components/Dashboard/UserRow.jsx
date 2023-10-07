import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Tr = styled.tr`
	background-color: ${ props => props.theme.name === 'dark' ?	'rgb(186, 186, 186)' : 'white' };
  &:nth-of-type(2n) {
    background-color: ${ props => props.theme.name === 'dark' ?	'rgb(121, 120, 120)' : 'lightgray' };
  }
`
const Td = styled.td`
  text-align: center;
  padding: 0.8rem;
`
const Button = styled.button`
  padding: 0.7rem;
  border: none;
  border-radius: 3px;
  background-color:rgb(50, 104, 190);
	color: white;
	letter-spacing: 0.1rem;
  text-transform: uppercase;
	cursor: pointer;
`

function UserRow({ id, name, email }) {
  return (
    <Tr key={`${id}`}>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>
        <Link to={`${id}`}>
          <Button>Posts</Button>
        </Link>
      </Td>
    </Tr>
  )
}

export { UserRow }
