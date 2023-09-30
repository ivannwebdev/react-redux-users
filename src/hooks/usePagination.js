import { useState } from 'react'
import { arrayFromNumber } from '../operations/arrayFromNumber'

function usePagination({ data, limit = 5 }) {
	const [currentPage, currentPageSetter] = useState(1)
	const pagesCount = Math.ceil(data?.length / limit)
	const pages = arrayFromNumber(pagesCount)
	const portionStart = limit * (currentPage - 1)
	const portionEnd = portionStart + limit
	const paginatedData = data?.slice(portionStart, portionEnd)

	function setCurrentPage(page) {
		const isPageInvalid = page < 1 || page > pagesCount

		currentPageSetter(p => isPageInvalid ? p : page)
	}

	return {
		pages,
		paginatedData,
		currentPage,
		setCurrentPage
	}
}

export { usePagination }
