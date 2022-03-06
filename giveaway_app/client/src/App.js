import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Flex } from '@chakra-ui/react'

// Components
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/home/Home'
import RegLog from './components/auth/RegLog'
import NavBar from './components/navbar/NavBar'
import Dashboard from './components/dashboard/Dashboard'

import { getPayload } from './enviroment/auth'

function App() {
	const [userID, setUserID] = useState()

	// try useLayoutEffect if this works
	useEffect(() => {
		setUserID(getPayload())
	}, [])

	// Get logged in user info
	useEffect(() => {
		const getUser = async (id) => {}

		if (userID) {
			getUser(userID)
		}
	}, [userID])

	// Get All Giveaways
	useEffect(() => {
		const getGiveaways = async () => {
			try {
				const { data } = await axios.get('api/giveaways/')
				console.log(data)
			} catch (err) {
				console.log(err)
			}
		}
		getGiveaways()
	}, [])
	return (
		<BrowserRouter>
			<NavBar />
			<Container maxW='container.xl' p={0}>
				<Flex h='100vh' py={20}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/register-login' element={<RegLog />} />
					</Routes>
				</Flex>
			</Container>
		</BrowserRouter>
	)
}

export default App
