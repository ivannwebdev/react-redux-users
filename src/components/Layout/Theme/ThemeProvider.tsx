import React, { FC, ReactElement, useEffect } from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { useAppSelector } from '../../../hooks/useAppSelector.ts'
import { PropsWithChildren } from '../../../types/index.ts'
import { Theme } from '../../../strore/slices/theme.ts'

export type ThemeStyles = {
  [key in Theme]: {
    name: Theme
    main: string
    textColor: string
  }
}

const ThemeProvider: FC<PropsWithChildren> = ({ children }): ReactElement => {
  const theme = useAppSelector((state) => state.theme)
  const getTheme: ThemeStyles = {
    light: {
      name: 'light',
      main: '#fff',
      textColor: '#000'
    },
    dark: {
      name: 'dark',
      main: 'rgb(48, 48, 48)',
      textColor: '#fff'
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return <Provider theme={getTheme[theme]}>{children}</Provider>
}

export { ThemeProvider }
