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
    Container
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
            navigate('/')
        } catch (error) {
            setFormError(error.response)
            console.log('📮', error)
        }
    }

    return (
        <Container maxW="container.sm" p={0}>
            <VStack w="full" h="full" p={10} alignItems="stretch" spacing={10}>
                <Box>
                    <Heading size='2xl'>Login</Heading>
                    <Text my={4}>If you don't have an account, <Button variant="link" colorScheme="black">click here to register</Button>.</Text>
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
        </Container>
    )
}

export default Login
