import { HStack, VStack, Spinner } from '@chakra-ui/react'
import React, { useEffect, useLayoutEffect, useState } from 'react'

import UserInfo from './components/UserInfo'
import ActiveGiveaways from './components/ActiveGiveaways'
import ExpiredGiveaways from './components/ExpiredGiveaways'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { userIsAuthenticated } from '../../enviroment/auth'

const Dashboard = ({ user, regions, categories }) => {
	const [giveawayFormData, setGiveawayFormData] = useState({})

	const navigate = useNavigate()
	useLayoutEffect(() => {
		!userIsAuthenticated() && navigate('/login')
	}, [navigate])

	const handelChange = (e) => {
		const newValue = { ...giveawayFormData, [e.target.id]: e.target.value }
		setGiveawayFormData(newValue)
	}

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
