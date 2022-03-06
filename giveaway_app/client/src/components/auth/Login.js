import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import {
	Heading,
	VStack,
	FormControl,
	FormLabel,
	Input,
	Button,
	Box,
} from '@chakra-ui/react'

const Login = ({ setIsLoggedIn }) => {
	const navigate = useNavigate()

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const [formError, setFormError] = useState('')

	const handleChange = (e) => {
		const newObj = { ...formData, [e.target.name]: e.target.value }
		setFormData(newObj)
		setFormError('')
	}

	const saveTokenToLocalStorage = (token) => {
		window.localStorage.setItem('giveaway-token', token)
	}

	const handleSubmit = async (e) => {
		try {
			const { data } = await axios.post('/api/auth/login/', formData)
			saveTokenToLocalStorage(data.token)

			navigate('/')
		} catch (error) {
			setFormError(error.response)
			console.log('📮', error)
		}
	}

	return (
		<VStack>
			<Box>
				<Heading size='2xl'>Login</Heading>
				{/* <Text my={4}>
					If you don't have an account, click here to register.
				</Text> */}
				<FormControl my={2}>
					<FormLabel htmlFor='email'>Email</FormLabel>
					<Input
						onChange={handleChange}
						type='email'
						name='email'
						defaultValue={formData.email}
						placeholder='example@mail.com'
					/>
				</FormControl>
				<FormControl my={2}>
					<FormLabel>Password</FormLabel>
					<Input
						onChange={handleChange}
						type='password'
						name='password'
						placeholder='Password'
						defaultValue={formData.password}
					/>
				</FormControl>
				<Button onClick={handleSubmit} size='lg' w='full' type='submit'>
					Login
				</Button>
			</Box>
		</VStack>
	)
}

export default Login
