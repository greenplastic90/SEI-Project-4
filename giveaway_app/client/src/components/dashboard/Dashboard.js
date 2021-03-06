import { Heading } from '@chakra-ui/react'
import React, { useLayoutEffect } from 'react'

import { useNavigate } from 'react-router'
import { userIsAuthenticated } from '../../enviroment/auth'
import UserDisplay from '../UserDisplay'

const Dashboard = ({ user, regions, categories, setCreatedGiveaway }) => {
	const navigate = useNavigate()

	useLayoutEffect(() => {
		!userIsAuthenticated() && navigate('/login')
	}, [navigate])

	return (
		<>
			<UserDisplay
				title='Dashboard'
				user={user}
				regions={regions}
				categories={categories}
				setCreatedGiveaway={setCreatedGiveaway}
			/>
		</>
	)
}

export default Dashboard
