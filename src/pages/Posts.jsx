import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { usePagination } from '../hooks/usePagination'
import { usersSelectors } from '../strore/selectors/usersSelectors'
import { Loader } from '../components/Loader'
import { Error } from './Error'
import { PageNotFound } from './PageNotFound'
import { Pagination } from '../components/Posts/Pagination'
import { useParams } from 'react-router-dom'
import { postsSelectors } from '../strore/selectors/postsSelectors'
import styled from 'styled-components'
import { useActions } from '../hooks/useActions'
import { BackLink } from '../components/Posts/BackLink'

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

function Posts() {
  const { id } = useParams()
  const numId = Number(id)
  const { getPosts } = useActions()
  const isLoading = useSelector(postsSelectors.isLoading(numId))
  const error = useSelector(postsSelectors.error(numId))
  const posts = useSelector(postsSelectors.posts(numId))
  const username = useSelector(usersSelectors.username(numId))
  const users = useSelector(usersSelectors.users)
  const { paginatedData, currentPage, pages, setCurrentPage } = usePagination({
    data: posts,
    limit: 4
  })
  const pageNotFound = !Number.isInteger(numId) || numId < 1 || numId > users?.length

  useEffect(() => {
    getPosts(numId)
  }, [id])

  if (isLoading) return <Loader $small />

  if (error) return <Error message={error.message} />

  if (pageNotFound) return <PageNotFound />

  return (
    <Container>
      <Title>{username}</Title>

      <BackLink />

      <Pagination
        username={username}
        data={paginatedData}
        currentPage={currentPage}
        pages={pages}
        setCurrentPage={setCurrentPage}
      />

    </Container>
  )
}

export { Posts }
