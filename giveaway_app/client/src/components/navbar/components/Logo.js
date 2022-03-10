import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

const Logo = () => {
    const navigate = useNavigate()
	return (
		<Box>
			<Text fontSize='lg' fontWeight='bold'onClick={() => navigate('/')} cursor={'pointer'}>
				Giveaway Bae
			</Text>
		</Box>
	)
}

export default Logo
