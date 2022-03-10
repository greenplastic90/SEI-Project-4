import React, { useState } from 'react'
import {
    InputGroup,
    Button,
    InputRightElement,
    Input,
    Box,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SearchBar = ({ setSearchText, serachText }) => {

    const handleChange = (e) => {
        // console.log(e.target.value)
        setSearchText(e.target.value)
    }


    return (
        <Box w={{ base: '40%', md: '40%' }}>
            <InputGroup>
                <Input type='text' placeholder='I want..' onChange={handleChange} />
                <InputRightElement width='4.5rem'>
                    <Link to = {{
                        pathname: '/explore',
                        state: { serachText: true }
                    }}>
                    <Button h='1.75rem' size='sm' mr={2}>
                        search
                    </Button>
                </Link>
            </InputRightElement>
        </InputGroup>
        </Box >
    )
}

export default SearchBar

