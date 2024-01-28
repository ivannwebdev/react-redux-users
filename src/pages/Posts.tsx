import React, { FC, ReactElement } from 'react'
import { Loader } from '../components/Loader.tsx'
import { Error } from './Error.tsx'
import { PageNotFound } from './PageNotFound.tsx'
import { Pagination } from '../components/Posts/Pagination.tsx'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { BackLink } from '../components/Posts/BackLink.tsx'
import { useGetUsersQuery } from '../strore/slices/users.ts'
import { useGetUserPostsQuery } from '../strore/slices/posts.ts'

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  row-gap: 2rem;
`
const Title = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: center;
  padding-top: 1.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
`

const Posts: FC = (): ReactElement => {
  const { id } = useParams()
  const numId = Number(id)
  const { isLoading, data, error } = useGetUserPostsQuery(numId)
  const { data: users } = useGetUsersQuery()
  const username = users?.find((user) => user.id === numId)?.name
  const pageNotFound = !Number.isInteger(numId) || numId < 1

  if (isLoading) return <Loader $small />

  if (error) return <Error error={error} />

  if (pageNotFound) return <PageNotFound />

  return (
    <Container>
      <Title>{username}</Title>

      <BackLink />

      <Pagination limit={4} data={data} />
    </Container>
  )
}

export { Posts }
