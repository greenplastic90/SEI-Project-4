import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getPayload } from '../../enviroment/auth'
import {
	Heading,
	VStack,
	Text,
	FormControl,
	FormLabel,
	Input,
	Button,
	Box,
} from '@chakra-ui/react'

const Login = () => {
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

	const setLocalToken = (token) => {
		window.localStorage.setItem('giveaway-token', token)
	}

	const handleSubmit = async (e) => {
		try {
			const { data } = await axios.post('/api/auth/login/', formData)
			setLocalToken(data.token)
			const payload = getPayload()
			const userId = payload.sub
			window.localStorage.setItem('giveaway-userId', userId) // why are we getting the user ID and saving it to local storage?
			console.log('📮', userId)
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
				<Text my={4}>
					If you don't have an account, click here to register.
				</Text>
				<FormControl mt={2}>
					<FormLabel htmlFor='email'>Email</FormLabel>
					<Input
						onChange={handleChange}
						type='email'
						name='email'
						defaultValue={formData.email}
						placeholder='example@email.com'
					/>
				</FormControl>
				<FormControl mt={2}>
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
