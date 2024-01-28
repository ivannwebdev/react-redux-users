import { ReactNode } from 'react'

export type User = {
  name: string,
  id: number,
  email: string
}

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type PropsWithChildren<P = unknown> = P & { children: ReactNode }
