import { useState, useMemo, ChangeEvent } from 'react'
import { User } from '../types'

function useSearchInput(data: User[] | undefined) {
  const [filter, setFilter] = useState<string>('')
  const filtredItems = useMemo(
    () => data?.filter(item => item.name.toLocaleLowerCase().includes(filter.toLowerCase())),
    [filter, data]
  )

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value)
  }

  return {
    value: filter,
    onChange: handleChange,
    searchedItems: filtredItems
  }
}

export { useSearchInput }
