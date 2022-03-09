import { HStack, VStack, Heading, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { SocialIconLink } from '../../../helpers/SocialIconLink'
import GiveawayImage from './GiveawayImage'

const GiveawayCard = ({ giveaway }) => {
	return (
		<HStack border={'1px'} borderRadius={'10px'} w={'full'} p={'5px'}>
			{giveaway.giveaway_images ? (
				<GiveawayImage photo={giveaway.giveaway_images[0]} />
			) : (
				<GiveawayImage photo='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg' />
			)}

			<VStack>
				<Text>{giveaway.name}</Text>
				<SocialIconLink url={giveaway.giveaway_link} />
			</VStack>
		</HStack>
	)
}

export default GiveawayCard
