import { HStack, VStack, Spinner } from '@chakra-ui/react'
import React, { useEffect, useLayoutEffect, useState } from 'react'

import UserInfo from './components/UserInfo'
import ActiveGiveaways from './components/ActiveGiveaways'
import ExpiredGiveaways from './components/ExpiredGiveaways'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { userIsAuthenticated } from '../../enviroment/auth'

const Dashboard = ({ user, regions, categories, setCreatedGiveaway }) => {
	const navigate = useNavigate()
	useLayoutEffect(() => {
		!userIsAuthenticated() && navigate('/login')
	}, [navigate])

	return (
		<VStack w='100%'>
			{/* make this HStack its own components to use in the VUser profile page as well */}
			{user ? (
				<>
					<HStack justify='space-between' w='100%'>
						<UserInfo
							user={user}
							regions={regions}
							categories={categories}
							setCreatedGiveaway={setCreatedGiveaway}
						/>
						<ActiveGiveaways />
					</HStack>

					<ExpiredGiveaways />
				</>
			) : (
				<Spinner />
			)}
		</VStack>
	)
}

export default Dashboard
