import { VStack, Text } from '@chakra-ui/react'
import React from 'react'
import GiveawayCard from './sub-components/GiveawayCard'

const ActiveGiveaways = ({ giveaways }) => {
	return (
		<VStack spacing={4}>
			{giveaways ? (
				giveaways.map((giveaway) => (
					<GiveawayCard key={giveaway.id} giveaway={giveaway} />
				))
			) : (
				<Text>No giveaways</Text>
			)}
		</VStack>
	)
}

export default ActiveGiveaways
