import { Box, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import LoggedOut from './button-groups/LoggedOut'
import User from './button-groups/User'
import VerifiedUser from './button-groups/VerifiedUser'
import MenuItem from './MenuItem'
import { userIsAuthenticated } from '../../../enviroment/auth'
import DarkModeToggle from './DarkModeToggle'

const MenuLinks = ({ isOpen, mdDisplay }) => {
	// const [isLoggedIn, setIsLoggedIn] = useState(false)

	const handleLogout = () => {
		window.localStorage.removeItem('giveaway-token')
	}

	// useEffect(() => {
	// 	setIsLoggedIn(userIsAuthenticated())
	// }, [])

	return (
		<Box
			display={{ base: isOpen ? 'block' : 'none', md: mdDisplay }}
			flexBasis={{ base: '100%', md: 'auto' }}
		>
			<Stack
				spacing={[2, 8, 8, 8]}
				align='center'
				justify={['center', 'flex-start', 'flex-end', 'flex-end']}
				direction='row'
				pt={[4, 4, 0, 0]}
			>
				<DarkModeToggle />
				<MenuItem to='/'>Home</MenuItem>
				{userIsAuthenticated() ? (
					<>
						<VerifiedUser />
						<User />
						<MenuItem func={handleLogout} to='/'>
							Logout
						</MenuItem>
					</>
				) : (
					<LoggedOut />
				)}
			</Stack>
		</Box>
	)
}

export default MenuLinks
