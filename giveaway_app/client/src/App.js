import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
			<Routes></Routes>
		</BrowserRouter>
	)
}

export default App
