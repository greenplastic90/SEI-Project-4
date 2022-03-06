import React from 'react'
import {
	InputGroup,
	Button,
	InputRightElement,
	Input,
	Box,
} from '@chakra-ui/react'

const SearchBar = () => {
	return (
		<Box w={{ base: '40%', md: '40%' }}>
			<InputGroup>
				<Input type='text' placeholder='I want..' />
				<InputRightElement width='4.5rem'>
					<Button h='1.75rem' size='sm' mr={2}>
						search
					</Button>
				</InputRightElement>
			</InputGroup>
		</Box>
	)
}

export default SearchBar
