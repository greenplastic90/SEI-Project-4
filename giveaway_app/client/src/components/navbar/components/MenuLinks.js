import { Box, Stack } from '@chakra-ui/react'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import LoggedOut from './button-groups/LoggedOut'
import User from './button-groups/User'
import VerifiedUser from './button-groups/VerifiedUser'
import MenuItem from './MenuItem'
import { userIsAuthenticated } from '../../../enviroment/auth'

import { useNavigate } from 'react-router'

const MenuLinks = ({ isOpen, mdDisplay, isVerified }) => {
	const navigate = useNavigate()

	const handleLogout = () => {
		window.localStorage.removeItem('giveaway-token')
		navigate('/')
	}

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
				<MenuItem to='/'>Home</MenuItem>
                <MenuItem to='/explore'>Search</MenuItem>
				{userIsAuthenticated() ? (
					<>
						{isVerified ? <VerifiedUser /> : <User />}

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
