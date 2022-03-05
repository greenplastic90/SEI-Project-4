import { Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const NavBarContainer = ({ children }) => {
	const bgColor = useColorModeValue(['gray.100', 'blue.100'], 'green.700')
	const textColor = useColorModeValue('green.700', 'gray.100')
	return (
		<Flex
			as='nav'
			align='center'
			justify='space-between'
			wrap='wrap'
			w='100%'
			mb={8}
			p={8}
			// bg={bgColor}
			// color={textColor}
		>
			{children}
		</Flex>
	)
}

export default NavBarContainer
