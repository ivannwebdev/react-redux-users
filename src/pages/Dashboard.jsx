import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Error } from './Error'
import { Loader } from '../components/Loader'
import { UsersTable } from '../components/Dashboard/UsersTable'
import { useActions } from '../hooks/useActions'
import { useSearchInput } from '../hooks/useSearchInput'
import { usersSelectors } from '../strore/selectors/usersSelectors'
import { SearchInput } from '../components/Dashboard/SearchInput'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`
const UserNotFound = styled.h3`
  padding: 1rem;
`

function Dashboard() {
  const isLoading = useSelector(usersSelectors.isLoading)
  const users = useSelector(usersSelectors.users)
  const error = useSelector(usersSelectors.error)
  const { getUsers } = useActions()
  const { searchedItems, value, onChange } = useSearchInput(users)

  useEffect(() => {
    getUsers()
  }, [])

  if (isLoading) return <Loader />

  if (error) return <Error message={error} />

  return (
    <Container>
      <SearchInput
        users={searchedItems}
        value={value}
        onChange={onChange}
      />

      {
        searchedItems.length
          ?
          <UsersTable users={searchedItems} />
          :
          <UserNotFound>No such user</UserNotFound>
      }
    </Container>
  )
}

export { Dashboard }
