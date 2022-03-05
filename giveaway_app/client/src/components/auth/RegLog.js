import React from 'react'
import { Flex, Container, Divider } from '@chakra-ui/react'

// Components
import Login from './Login'
import Register from './Register'

const RegLog = () => {

    return (
        <>
            <Container maxW="container.xl" p={5}>
                <Flex alignItems={"flex-start"} justifyContent={"space-evenly"} flexDirection={"row"} flexWrap={"wrap"}>
                    <Login />
                    <Register />
                </Flex>
            </Container>
        </>
    )
}

export default RegLog