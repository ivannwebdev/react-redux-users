import React, { FC, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../Layout/Layout.tsx'
import { PublicRoutes } from '../../router/index.ts'

const Router: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {
          PublicRoutes.map(route => <Route {...route} key={route.path} element={< route.element />} />)
        }
      </Route>
    </Routes>
  )
}

export { Router }
