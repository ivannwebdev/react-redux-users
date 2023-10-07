import React from 'react'
import styled from 'styled-components'
import { Arrow } from './Arrow'

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
const Page = styled.div`
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

function Pagination({ data, currentPage, pages, setCurrentPage }) {
	const setPage = (page) => {
		return () => setCurrentPage(page)
	}

	return (
		<Container>
			<Layout>
				{
					data?.map(
						post => (
							<div key={`${post.id}`}>
								<h3>{post.title}</h3>
								<p>{post.body}</p>
							</div>
						)
					)
				}
			</Layout>

			<Pages>
				<Arrow onClick={setPage(currentPage - 1)} />

				{
					pages?.map((page) => (
						<Page
							onClick={setPage(page)}
							$highlighted={page === currentPage}
							key={`${page}`}
						>
							{page}
						</Page>
					))
				}

				<Arrow onClick={setPage(currentPage + 1)} $right />
			</Pages>
		</Container>
	)
}

export { Pagination }
