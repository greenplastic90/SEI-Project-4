import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Flex } from '@chakra-ui/react'

// Components
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/home/Home'
import NavBar from './components/navbar/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import Showcase from './components/showcase/Showcase'
import Footer from './components/miscellaneous/Footer'
import Explore from './components/explore/Explore'
import { getPayload } from './enviroment/auth'
import Profile from './components/profile/Profile'

function App() {
	const [userIDFromToken, setUserIDFromToken] = useState(0)
	// is verified is set to whatever boolean just so passing it in the NavBar as undefined doesn't crash it.
	const [giveaways, setGivaeaways] = useState([])
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [user, setUser] = useState({ is_valid: false })
	const [regions, setRegions] = useState([{ id: null, name: '' }])
	const [categories, setCategories] = useState([{ id: null, name: '' }])
	const [serachText, setSearchText] = useState()
	const [createdGiveaway, setCreatedGiveaway] = useState({})

	// try useLayoutEffect if this works
	useEffect(
		() => {
			if (!getPayload()) {
				console.log('Not logged in')
				return
			}
			setUserIDFromToken(getPayload())
			console.log('payload')
		},
		[isLoggedIn],
		[]
	)

	// Get logged in user info
	useEffect(() => {
		const getUser = async (id) => {
			try {
				const { data } = await axios.get(`api/profile/${id}/`)
				setUser(data)
			} catch (error) {
				console.log(error)
			}
		}

		if (userIDFromToken) {
			getUser(userIDFromToken.sub)
		}
	}, [userIDFromToken, createdGiveaway])

	// Get Categories
	useEffect(() => {
		const getCatergories = async () => {
			try {
				const { data } = await axios.get('api/categories/')
				// formated to work with React-Select
				const formated = data.map((category) => {
					return {
						...category,
						value: category.id,
						label: category.name,
					}
				})
				setCategories(formated)
				// console.log(formated)
			} catch (error) {
				console.log(error)
			}
		}
		getCatergories()
	}, [])

	// Get Regions
	useEffect(() => {
		const getRegions = async () => {
			try {
				const { data } = await axios.get('api/regions/')
				// formated to work with React-Select
				const formated = data.map((region) => {
					return { ...region, value: region.id, label: region.name }
				})
				setRegions(formated)
				// console.log(formated)
			} catch (error) {
				console.log(error)
			}
		}
		getRegions()
	}, [])

	// Get All Giveaways
	useEffect(
		() => {
			const getGiveaways = async () => {
				try {
					const { data } = await axios.get('api/giveaways/')
					setGivaeaways(data)
					// console.log(giveaways)
				} catch (err) {
					console.log(err)
				}
			}
			getGiveaways()
		},
		[createdGiveaway],
		[]
	)

	return (
		<BrowserRouter>
			<NavBar
				isVerified={user.is_verified}
				setSearchText={setSearchText}
				serachText={serachText}
			/>
			<Container maxW={'container.xl'} px={[3, 3, 6]} mt={2}>
				<Flex h='100vh' pb={20}>
					<Routes>
						<Route
							path='/'
							element={<Home createdGiveaway={createdGiveaway} />}
						/>
						<Route
							path='/login'
							element={<Login setIsLoggedIn={setIsLoggedIn} />}
						/>
						<Route path='/register' element={<Register />} />
						<Route
							path='/dashboard'
							element={
								<Dashboard
									user={user}
									regions={regions}
									categories={categories}
									setCreatedGiveaway={setCreatedGiveaway}
								/>
							}
						/>
						<Route
							path='/profile'
							element={
								<Profile
									user={user}
									regions={regions}
									categories={categories}
								/>
							}
						/>
						<Route path='/giveaway/:id' element={<Showcase />} />
						<Route
							path='/explore'
							element={
								<Explore
									regions={regions}
									text={serachText}
									categories={categories}
								/>
							}
						/>
					</Routes>
				</Flex>
			</Container>
			<Footer />
		</BrowserRouter>
	)
}

export default App
