import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { Error } from './Error.tsx'
import { Loader } from '../components/Loader.tsx'
import { UsersTable } from '../components/Dashboard/UsersTable.tsx'
import { useSearchInput } from '../hooks/useSearchInput.ts'
import { SearchInput } from '../components/Dashboard/SearchInput.tsx'
import { useGetUsersQuery } from '../strore/slices/users.ts'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`
const UserNotFound = styled.h3`
  padding: 1rem;
`

const Dashboard: FC = (): ReactElement => {
  const { data, isLoading, error } = useGetUsersQuery()
  const { searchedItems, value, onChange } = useSearchInput(data)

  if (isLoading) return <Loader />

  if (error && 'status' in error) return <Error error={error} />

  return (
    <Container>
      <SearchInput value={value} onChange={onChange} />

      {searchedItems?.length ? (
        <UsersTable users={searchedItems} />
      ) : (
        <UserNotFound>No such user</UserNotFound>
      )}
    </Container>
  )
}

export { Dashboard }
