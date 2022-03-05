import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Heading, VStack, Text, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'


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
        e.preventDefault()
        try {
            await axios.post('/api/auth/register', formData)
            navigate('/login')
        } catch (error) {
            setFormErrors({ ...formErrors, ...error.response.data.errors })
        }
    }

    return (
        <VStack>
            <form onSubmit={handleSubmit}>
                <Heading size="2xl">Register</Heading>
                <Text my={4}>Have an account? click here to login.</Text>
                <FormControl my={2}>
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <Input onChange={handleChange} type='text' placeholder='Username' name='username' defaultValue={formData.username} />
                </FormControl>
                <FormControl my={2}>
                    <FormLabel htmlFor='email'>Email Address</FormLabel>
                    <Input onChange={handleChange} type='email' placeholder='Email' name='email' defaultValue={formData.email} />
                </FormControl>
                <FormControl my={2}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input onChange={handleChange} type='password' placeholder='Password' name='password' defaultValue={formData.password} />
                </FormControl>
                <FormControl my={2}>
                    <FormLabel htmlFor='passwordConfirmation'>Confirm Password</FormLabel>
                    <Input onChange={handleChange} type='password' placeholder='Confirm Password' name='passwordConfirmation' defaultValue={formData.passwordConfirmation} />
                </FormControl>
                <Button size="lg" w="full" type='submit'>Login</Button>
            </form>
        </VStack>
    )
}

export default Register
