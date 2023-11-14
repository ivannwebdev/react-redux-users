const arrayFromNumber = (p) => {
  const paramToNumber = Number(p)

  if (isNaN(paramToNumber)) return

  return (
    [...Array(paramToNumber).keys()]
      .map(el => ++el)
  )
}

export { arrayFromNumber }
