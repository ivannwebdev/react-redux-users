import { useState, useMemo } from 'react'

function useSearchInput(data) {
  const [filter, setFilter] = useState('')
  const filtredItems = useMemo(
    () => data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())),
    [filter, data]
  )

  function handleChange(e) {
    setFilter(e.target.value)
  }

  return {
    value: filter,
    onChange: handleChange,
    searchedItems: filtredItems
  }
}

export { useSearchInput }
