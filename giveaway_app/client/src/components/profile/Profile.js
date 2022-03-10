import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router'
import { userIsAuthenticated } from '../../enviroment/auth'
import UserDisplay from '../UserDisplay'

function Profile({ user, regions, categories }) {
	const navigate = useNavigate()

	useLayoutEffect(() => {
		!userIsAuthenticated() && navigate('/login')
	}, [navigate])
	return (
		<UserDisplay
			title='Profile'
			user={user}
			regions={regions}
			categories={categories}
		/>
	)
}

export default Profile
