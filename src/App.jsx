import { Route, Routes } from 'react-router-dom'
import { Posts } from './pages/Posts'
import { Dashboard } from './pages/Dashboard'
import { Layout } from './components/Layout/Layout'
import { useEffect } from 'react'
import { useActions } from './hooks/useActions'

function App() {
	const { getUsers } = useActions()

	useEffect(
		() => {
			getUsers()
		}
		, [])

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Dashboard />} />
				<Route path=':id' element={<Posts />} />
			</Route>
		</Routes>
	)
}

export  { App }
