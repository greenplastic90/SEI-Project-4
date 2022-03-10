import {
	HStack,
	VStack,
	Stack,
	Spinner,
	SimpleGrid,
	GridItem,
	useBreakpointValue,
	Heading,
} from '@chakra-ui/react'
import React, { useEffect, useLayoutEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router'
import { userIsAuthenticated } from '../enviroment/auth'

import ActiveGiveaways from './dashboard/components/ActiveGiveaways'
import ExpiredGiveaways from './dashboard/components/ExpiredGiveaways'
import UserInfo from './dashboard/components/UserInfo'

const UserDisplay = ({
	user,
	regions,
	categories,
	setCreatedGiveaway,
	title,
}) => {
	const navigate = useNavigate()
	const userInfoColSpan = useBreakpointValue({ base: 4, md: 1 })
	const ActiveColSpan = useBreakpointValue({ base: 4, md: 3 })
	const [pathName, setPathName] = useState()
	const [giveawaysTitle, setGiveawaysTitle] = useState()

	useEffect(() => {
		!userIsAuthenticated() && navigate('/login')
		setPathName(window.location.pathname)
	}, [navigate])

	useEffect(() => {
		if (pathName === '/profile') setGiveawaysTitle('Your Watchlist')
		if (pathName === '/dashboard') setGiveawaysTitle('Your Giveaways')
	}, [pathName])
	return (
		<VStack w='100%' spacing={10}>
			{/* make this HStack its own components to use in the VUser profile page as well */}
			<Heading>{title}</Heading>
			{user ? (
				<>
					{console.log('pathname -->', pathName)}
					<SimpleGrid
						columns={4}
						rows={3}
						rowGap={10}
						columnGap={{ base: 0, md: 18 }}
					>
						<GridItem colSpan={userInfoColSpan} rowSpan={3}>
							<UserInfo
								user={user}
								regions={regions}
								categories={categories}
								setCreatedGiveaway={setCreatedGiveaway}
								pathName={pathName}
							/>
						</GridItem>
						<GridItem colSpan={ActiveColSpan} rowSpan={3}>
							<ActiveGiveaways
								title={giveawaysTitle}
								userID={user.id}
								giveaways={user.giveaways}
								regions={regions}
								categories={categories}
								setCreatedGiveaway={setCreatedGiveaway}
							/>
						</GridItem>
					</SimpleGrid>

					{/* <ExpiredGiveaways /> */}
				</>
			) : (
				<Spinner />
			)}
		</VStack>
	)
}

export default UserDisplay
