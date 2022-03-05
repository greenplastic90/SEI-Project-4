import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import LoggedOut from './button-groups/LoggedOut'
import User from './button-groups/User'
import VerifiedUser from './button-groups/VerifiedUser'
import MenuItem from './MenuItem'

const MenuLinks = ({ isOpen }) => {
	return (
		<Box
			display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
			flexBasis={{ base: '100%', md: 'auto' }}
		>
			<Stack
				spacing={[2, 8, 8, 8]}
				align='center'
				justify={['center', 'flex-start', 'flex-end', 'flex-end']}
				direction={['column', 'row', 'row', 'row']}
				pt={[4, 4, 0, 0]}
			>
				<MenuItem to='/'>Home</MenuItem>

				<LoggedOut />

				<VerifiedUser />

				<User />
			</Stack>
		</Box>
	)
}

export default MenuLinks
