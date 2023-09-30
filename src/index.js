import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { App } from './App'
import { store } from './strore'
import { ThemeProvider } from './components/Layout/Theme/ThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<HashRouter>
		<Provider store={store}>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</Provider>
	</HashRouter>
)
