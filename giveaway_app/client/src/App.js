import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Login from './components/auth/Login'
import Register from './components/auth/Register'

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
			<Routes>
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
		</BrowserRouter>
	)
}

export default App
