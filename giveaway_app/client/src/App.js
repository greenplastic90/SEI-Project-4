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

import { getPayload } from './enviroment/auth'

function App() {
    const [userIDFromToken, setUserIDFromToken] = useState(0)
    // is verified is set to whatever boolean just so passing it in the NavBar as undefined doesn't crash it.
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({ is_valid: false })
    const [regions, setRegions] = useState([
        { id: null, name: '' }
    ])
    const [categories, setCategories] = useState([
        { id: null, name: '' }
    ])

    // try useLayoutEffect if this works
    useEffect(() => {
        if (!getPayload()) {
            console.log("Not logged in")
            return
        }
        setUserIDFromToken(getPayload())
        console.log('payload')
    }, [isLoggedIn], [])

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
    }, [userIDFromToken])

    // Get Categories
    useEffect(() => {
        const getCatergories = async () => {
            try {
                const { data } = await axios.get('api/categories/')
                setCategories(data)
                console.log(categories)
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
                setRegions(data)
                console.log(regions)
            } catch (error) {
                console.log(error)
            }
        }
        getRegions()
    }, [])

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
            <NavBar isVerified={user.is_verified} />
            <Container maxW='container.xl' p={0}>
                <Flex h='100vh' py={20}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
                        <Route path='/register' element={<Register />} />
                        <Route
                            path='/dashboard'
                            element={
                                <Dashboard
                                    user={user}
                                    regions={regions}
                                    categories={categories}
                                />
                            }
                        />
                        <Route path='/showcase' element={<Showcase />} />
                    </Routes>
                </Flex>
            </Container>
        </BrowserRouter>
    )
}

export default App
