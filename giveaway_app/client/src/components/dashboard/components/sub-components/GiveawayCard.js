import { HStack, VStack, Heading, Tag } from '@chakra-ui/react'
import React from 'react'
import GiveawayImage from './GiveawayImage'

const GiveawayCard = ({ giveaway }) => {
	return (
		<HStack>
			{console.log(giveaway)}
			{giveaway.giveaway_images ? (
				<GiveawayImage photo={giveaway.giveaway_images[0]} />
			) : (
				<GiveawayImage photo='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg' />
			)}

			<VStack>
				<Heading size={'sm'}>{giveaway.name}</Heading>
				<Tag>{giveaway.category}</Tag>
			</VStack>
		</HStack>
	)
}

export default GiveawayCard
