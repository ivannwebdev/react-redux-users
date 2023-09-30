const arrayFromNumber = (number) => {
	const paramToNumber = Number(number)

	if (typeof paramToNumber !== 'number' || isNaN(number)) return

	return [...Array(number).keys()].map(el => ++el)
}

export { arrayFromNumber }
