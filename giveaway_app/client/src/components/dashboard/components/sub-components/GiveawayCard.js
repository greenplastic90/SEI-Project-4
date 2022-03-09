import { HStack, VStack, Text, Button, Divider } from '@chakra-ui/react'
import React from 'react'
import { SocialIconLink } from '../../../helpers/SocialIconLink'
import GiveawayImage from './GiveawayImage'
import UpdateGiveaway from './UpdateGiveaway'

const GiveawayCard = ({
	giveaway,
	regions,
	categories,
	userID,
	setCreatedGiveaway,
}) => {
	return (
		<>
			<VStack
				border={'1px'}
				borderRadius={'10px'}
				w={'full'}
				p={'5px'}
				px={'10px'}
				align={'flex-start'}
			>
				<Text>{giveaway.name}</Text>
				<Divider />
				<HStack w={'full'} justify={'space-between'} align={'self-end'}>
					<HStack
						w={'full'}
						justify={'flex-start'}
						align={'self-end'}
					>
						{giveaway.giveaway_images ? (
							<GiveawayImage
								photo={giveaway.giveaway_images[0]}
							/>
						) : (
							<GiveawayImage photo='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg' />
						)}
						<SocialIconLink url={giveaway.giveaway_link} />
					</HStack>
					<UpdateGiveaway
						giveaway={giveaway}
						userID={userID}
						regions={regions}
						categories={categories}
						setCreatedGiveaway={setCreatedGiveaway}
					/>
				</HStack>
			</VStack>
		</>
	)
}

export default GiveawayCard
