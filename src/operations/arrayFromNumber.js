const arrayFromNumber = (num) => {
  const paramToNumber = Number(num)

  if (typeof paramToNumber !== 'number' || isNaN(num)) return

  return (
    [...Array(num).keys()]
      .map(el => ++el)
  )
}

export { arrayFromNumber }
