import {
	HStack,
	VStack,
	Stack,
	Spinner,
	SimpleGrid,
	GridItem,
	useBreakpointValue,
} from '@chakra-ui/react'
import React, { useEffect, useLayoutEffect, useState } from 'react'

import UserInfo from './components/UserInfo'
import ActiveGiveaways from './components/ActiveGiveaways'
import ExpiredGiveaways from './components/ExpiredGiveaways'
import { useNavigate } from 'react-router'
import { userIsAuthenticated } from '../../enviroment/auth'

const Dashboard = ({ user, regions, categories, setCreatedGiveaway }) => {
	const navigate = useNavigate()
	const userInfoColSpan = useBreakpointValue({ base: 4, md: 1 })
	const ActiveColSpan = useBreakpointValue({ base: 4, md: 3 })

	useLayoutEffect(() => {
		!userIsAuthenticated() && navigate('/login')
	}, [navigate])

	return (
		<VStack w='100%'>
			{/* make this HStack its own components to use in the VUser profile page as well */}
			{user ? (
				<>
					<SimpleGrid
						columns={4}
						rowGap={10}
						columnGap={{ base: 0, md: 18 }}
					>
						<GridItem colSpan={userInfoColSpan}>
							<UserInfo
								user={user}
								regions={regions}
								categories={categories}
								setCreatedGiveaway={setCreatedGiveaway}
							/>
						</GridItem>
						<GridItem colSpan={ActiveColSpan}>
							<ActiveGiveaways giveaways={user.giveaways} />
						</GridItem>
					</SimpleGrid>

					<ExpiredGiveaways />
				</>
			) : (
				<Spinner />
			)}
		</VStack>
	)
}

export default Dashboard
