import React, { FC } from 'react'
import { Router } from './components/Router/Router.tsx'
import { ThemeProvider } from './components/Layout/Theme/ThemeProvider.tsx'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { store } from './strore/index.ts'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    transition: background-color .3s ease;

    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.textColor};

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background: lightgrey;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(73, 97, 232);
      border-radius: 20px;
      border: 3px solid lightgrey;
    }
  }
`

const App: FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </HashRouter>
    </Provider>
  )
}

export { App }
