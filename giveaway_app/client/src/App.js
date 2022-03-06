import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/home/Home'
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
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/register-login' element={<RegLog />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
