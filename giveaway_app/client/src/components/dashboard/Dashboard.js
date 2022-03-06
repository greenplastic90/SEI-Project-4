import { HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import UserInfo from './components/UserInfo'
import ActiveGiveaways from './components/ActiveGiveaways'
import ExpiredGiveaways from './components/ExpiredGiveaways'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Dashboard = ({ user }) => {
	const navigate = useNavigate()

	!user.id && navigate('/login')

	return (
		<VStack w='100%'>
			{/* make this HStack its own components to use in the VUser profile page as well */}
			{user ? (
				<>
					<HStack justify='space-between' w='100%'>
						<UserInfo user={user} />
						<ActiveGiveaways />
					</HStack>

					<ExpiredGiveaways />
				</>
			) : (
				'Loading'
			)}
		</VStack>
	)
}

export default Dashboard
