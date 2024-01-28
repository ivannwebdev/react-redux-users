import React, { FC, ReactElement, useState } from 'react'
import styled from 'styled-components'
import { Arrow } from './Arrow.tsx'
import { arrayOfNumber } from '../../operations/arrayOfNumber.ts'
import { Post } from '../../types'

const Container = styled.div`
  width: 60vw;
`
const Layout = styled.div`
  min-height: 63vh;
  border: 3px solid ${ props => props.theme.textColor };
  padding: 1rem;
  font-size: 1.075em;
`
const Pages = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`
type TPage = {
  $highlighted: boolean
}
const Page = styled.div<TPage>`
  padding: 1rem;
  border: 1px solid darkgray;
  cursor: pointer;
  background-color: ${ props => {
    if (props.theme.name === 'dark') return props.$highlighted ? 'grey' : 'none'

    return props.$highlighted ? 'lightgrey' : 'none'
  }
};

  &:hover {
    border-color: ${ props => props.theme.name === 'dark' ? 'white' : 'blue' };
	}
`
type Props = {
  data: Post[] | undefined,
  limit: number
}

const Pagination: FC<Props> = ({ data, limit }): ReactElement | null => {
  const [currentPage, currentPageSetter] = useState<number>(1)

  if (!data) return null

  const pagesCount = Math.ceil(data.length / limit)
  const pages = arrayOfNumber(pagesCount)
  const portionStart = limit * (currentPage - 1)
  const portionEnd = portionStart + limit
  const paginatedData = data.slice(portionStart, portionEnd)

  function setCurrentPage(page: number): void {
    const isPageInvalid: boolean = page < 1 || page > pagesCount

    currentPageSetter(p => isPageInvalid ? p : page)
  }

  return (
    <Container>
      <Layout>
        {
          paginatedData.map(
            post =>
              <div key={`${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
          )
        }
      </Layout>

      <Pages>
        <Arrow onClick={() => setCurrentPage(currentPage - 1)} />

        {
          pages.map(
            page =>
              <Page
                onClick={() => setCurrentPage(page)}
                $highlighted={page === currentPage}
                key={`${page}`}
              >
                {page}
              </Page>
          )
        }

        <Arrow onClick={() => setCurrentPage(currentPage + 1)} $right />
      </Pages>
    </Container>
  )
}

export { Pagination }
