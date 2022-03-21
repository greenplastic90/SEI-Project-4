import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {
	Heading,
	VStack,
	Text,
	FormControl,
	FormLabel,
	Input,
	Button,
	Box,
	Container,
	Radio,
	RadioGroup,
	Stack,
} from '@chakra-ui/react'
import Select from 'react-select'

const Register = ({ regions }) => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		password_confirmation: '',
		region: null,
		is_verified: false,
	})

	const [formErrors, setFormErrors] = useState({
		username: '',
		email: '',
		password: '',
		passwordConfirmation: '',
	})

	const navigate = useNavigate()

	const handleChange = (e) => {
		console.log('e --->', e)
		const newObj = { ...formData, [e.target.name]: e.target.value }
		setFormData(newObj)
		setFormErrors({ ...formErrors, [e.target.name]: '' })
	}

	const handelRegionSelections = (e) => {
		setFormData({ ...formData, region: e.id })
	}
	const handelAccountType = (e) => {
		setFormData({ ...formData, is_verified: e })
	}

	const handleSubmit = async (e) => {
		try {
			await axios.post('/api/auth/register/', formData)
			navigate('/login')
		} catch (err) {
			setFormErrors({ ...formErrors, ...err.response.data.detail })
			console.log(err.response)
		}
	}

	const handleNavigate = () => {
		navigate('/login')
	}

	return (
		<Container maxW='container.sm' p={0}>
			<VStack w='full' h='full' p={10} alignItems='stretch' spacing={10}>
				<Box
					onKeyPress={(e) => {
						e.key === 'Enter' && handleSubmit()
					}}
				>
					<Heading size='2xl'>Register</Heading>
					<Text my={4}>
						Have an account?{' '}
						<Button
							onClick={handleNavigate}
							variant='link'
							colorScheme='black'
						>
							click here to login
						</Button>
						.
					</Text>
					<FormControl my={2}>
						<FormLabel htmlFor='username'>Username</FormLabel>
						<Input
							onChange={handleChange}
							type='text'
							placeholder='Username'
							name='username'
							defaultValue={formData.username}
						/>
						{formErrors.username && (
							<Text fontSize={'small'} color={'red'}>
								{formErrors.username}
							</Text>
						)}
					</FormControl>
					<FormControl my={2}>
						<FormLabel htmlFor='email'>Email Address</FormLabel>
						<Input
							onChange={handleChange}
							type='email'
							placeholder='example@mail.com'
							name='email'
							defaultValue={formData.email}
						/>
						{formErrors.email && (
							<Text fontSize={'small'} color={'red'}>
								{formErrors.email}
							</Text>
						)}
					</FormControl>
					<FormControl my={2}>
						<FormLabel htmlFor='password'>Password</FormLabel>
						<Input
							onChange={handleChange}
							type='password'
							placeholder='Password'
							name='password'
							defaultValue={formData.password}
						/>
						{formErrors.password && (
							<Text fontSize={'small'} color={'red'}>
								{formErrors.password}
							</Text>
						)}
					</FormControl>
					<FormControl my={2}>
						<FormLabel htmlFor='passwordConfirmation'>
							Confirm Password
						</FormLabel>
						<Input
							onChange={handleChange}
							type='password'
							placeholder='Confirm Password'
							name='password_confirmation'
							defaultValue={formData.passwordConfirmation}
						/>
						{formData.passwordConfirmation &&
							formData.passwordConfirmation !==
								formData.password && (
								<Text fontSize={'small'} color={'red'}>
									Passwords do not match.
								</Text>
							)}
					</FormControl>
					<FormControl my={2}>
						<FormLabel htmlFor='region'>Region</FormLabel>
						<Select
							onChange={handelRegionSelections}
							id='region'
							name='region'
							options={regions}
							isRequired
						/>
					</FormControl>
					<RadioGroup
						onChange={handelAccountType}
						value={formData.is_verified}
						size='md'
						py={3}
					>
						<Stack direction='row' justify={'space-around'}>
							<Radio value={false} colorScheme='orange.400'>
								User Account
							</Radio>
							<Radio value={true} colorScheme='orange.400'>
								Business Account
							</Radio>
						</Stack>
					</RadioGroup>
					<Button
						onClick={handleSubmit}
						size='lg'
						w='full'
						type='submit'
					>
						Register
					</Button>
				</Box>
			</VStack>
		</Container>
	)
}

export default Register
