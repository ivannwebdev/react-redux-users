import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { UserRow } from './UserRow.tsx'
import { User } from '../../types'

const Table = styled.table`
  min-width: 60vw;
  border-collapse: collapse;
  border: 1px solid ${ props => props.theme.textColor };
  color: ${props => props.theme.textColor};
  border-radius: 1rem;
  background-color: white;
`
const Caption = styled.caption`
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  padding: 1rem;
  color: ${ props => props.theme.textColor };
`
const Th = styled.th`
  background-color: ${ props => props.theme.name === 'dark' ? 'rgb(66, 66, 66)' : 'darkgray' };
  text-align: center;
  padding: 0.8rem;
`
type Props = {
  users: User[]
}

const UsersTable: FC<Props> = ({ users }): ReactElement => {
  return (
    <Table>
      <Caption>Users and their posts</Caption>
      <thead>
        <tr>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th/>
        </tr>
      </thead>

      <tbody>
        {
          users.map(({ id, name, email }) =>
            <UserRow
              id={id}
              name={name}
              email={email}
              key={`${id}`}
            />
          )
        }
      </tbody>
    </Table>
  )
}

export { UsersTable }
