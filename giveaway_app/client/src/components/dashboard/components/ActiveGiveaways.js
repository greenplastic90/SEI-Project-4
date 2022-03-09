import {
	VStack,
	Text,
	SimpleGrid,
	GridItem,
	useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'
import GiveawayCard from './sub-components/GiveawayCard'

const ActiveGiveaways = ({
	giveaways,
	userID,
	regions,
	categories,
	setCreatedGiveaway,
}) => {
	const colSpan = useBreakpointValue([3, 3, 2])
	return (
		<VStack w={'full'}>
			<SimpleGrid columns={6} w={'full'} rowGap={5} columnGap={5}>
				{giveaways ? (
					giveaways.map((giveaway) => (
						<GridItem key={giveaway.id} colSpan={colSpan}>
							<GiveawayCard
								giveaway={giveaway}
								userID={userID}
								regions={regions}
								categories={categories}
								setCreatedGiveaway={setCreatedGiveaway}
							/>
						</GridItem>
					))
				) : (
					<Text>No giveaways</Text>
				)}
			</SimpleGrid>
		</VStack>
	)
}

export default ActiveGiveaways
