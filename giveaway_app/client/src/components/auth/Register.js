import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Heading, VStack, Text, FormControl, FormLabel, Input, Button, Box, Container } from '@chakra-ui/react'


const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const newObj = { ...formData, [e.target.name]: e.target.value }
        setFormData(newObj)
        setFormErrors({ ...formErrors, [e.target.name]: '' })
    }

    const handleSubmit = async (e) => {
        try {
            await axios.post('/api/auth/register/', formData)
            navigate('/login')
        } catch (error) {
            setFormErrors({ ...formErrors, ...error.response.data.errors })
            console.log(error.response)
        }
    }

    const handleNavigate = () => {
        navigate('/login')
    }

    return (
        <Container maxW="container.sm" p={0}>
            <VStack w="full" h="full" p={10} alignItems="stretch" spacing={10}>
                <Box onKeyPress={e => {e.key === 'Enter' && handleSubmit()}}>
                    <Heading size="2xl">Register</Heading>
                    <Text my={4}>Have an account? <Button onClick={handleNavigate} variant="link" colorScheme="black">click here to login</Button>.</Text>
                    <FormControl my={2}>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <Input onChange={handleChange} type='text' placeholder='Username' name='username' defaultValue={formData.username} />
                    </FormControl>
                    <FormControl my={2}>
                        <FormLabel htmlFor='email'>Email Address</FormLabel>
                        <Input onChange={handleChange} type='email' placeholder='example@mail.com' name='email' defaultValue={formData.email} />
                    </FormControl>
                    <FormControl my={2}>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input onChange={handleChange} type='password' placeholder='Password' name='password' defaultValue={formData.password} />
                    </FormControl>
                    <FormControl my={2}>
                        <FormLabel htmlFor='passwordConfirmation'>Confirm Password</FormLabel>
                        <Input onChange={handleChange} type='password' placeholder='Confirm Password' name='passwordConfirmation' defaultValue={formData.passwordConfirmation} />
                    </FormControl>
                    <Button onClick={handleSubmit} size="lg" w="full" type='submit'>Login</Button>
                </Box>
            </VStack>
        </Container>
    )
}

export default Register