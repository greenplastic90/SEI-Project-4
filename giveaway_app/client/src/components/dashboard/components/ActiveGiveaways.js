import {
	VStack,
	Text,
	SimpleGrid,
	GridItem,
	useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'
import GiveawayCard from './sub-components/GiveawayCard'

const ActiveGiveaways = ({ giveaways }) => {
	const colSpan = useBreakpointValue([6, 3, 2])
	return (
		<VStack w={'full'}>
			<SimpleGrid columns={6} w={'full'} rowGap={5} columnGap={5}>
				{giveaways ? (
					giveaways.map((giveaway) => (
						<GridItem key={giveaway.id} colSpan={colSpan}>
							<GiveawayCard giveaway={giveaway} />
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
