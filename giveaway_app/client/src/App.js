import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import RegLog from './components/auth/RegLog'
import NavBar from './components/navbar/NavBar'

function App() {
	useEffect(() => {
		const getGiveaways = async () => {
			try {
				const res = await axios.get('api/giveaways/')
				console.log(res)
			} catch (err) {
				console.log(err)
			}
		}
		getGiveaways()
	}, [])
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/Registerlogin' element={<RegLog />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
