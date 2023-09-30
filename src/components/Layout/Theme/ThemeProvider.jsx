import React, { useEffect } from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { useSelector } from 'react-redux'
import { themeSelectors } from '../../../strore/selectors/themeSelectors'

function ThemeProvider({ children }) {
	const theme = useSelector(themeSelectors.theme)
	const getTheme = {
		light: {
			name: 'light',
			main: '#fff',
			textColor: '#000',
		},
		dark: {
			name: 'dark',
			main: 'rgb(48, 48, 48)',
			textColor: '#fff',
		},
	}

	useEffect(() => {
		localStorage.setItem('theme', theme)
	}, [theme])

	return (
		<Provider theme={getTheme[theme]}>
			{children}
		</Provider>
	)
}

export { ThemeProvider }
