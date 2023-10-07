import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { App } from './App'
import { store } from './strore'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './components/Layout/Theme/ThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: 100%;

    background-color: ${ props => props.theme.main };
    color: ${ props => props.theme.textColor };
  }
`

root.render(
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider>

        <GlobalStyles />

        <App />

      </ThemeProvider>
    </Provider>
  </HashRouter>
)
