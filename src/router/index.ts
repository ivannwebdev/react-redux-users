import React from 'react'
import { Dashboard } from '../pages/Dashboard.tsx'
import { Posts } from '../pages/Posts.tsx'

export interface Route {
  path: string
  element: React.ComponentType
  title: string
  index: boolean
}

export enum RoutNames {
  DASHBOARD= '/',
  POSTS= '/:id'
}

export const PublicRoutes: Route[] = [
  { path: RoutNames.DASHBOARD, index: true, title: 'HOME', element: Dashboard },
  { path: RoutNames.POSTS, index: false, title: 'POSTS', element: Posts }
]

export const PrivateRoutes: Route[] = [

]
