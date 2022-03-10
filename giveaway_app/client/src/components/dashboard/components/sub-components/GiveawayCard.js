import {
	HStack,
	VStack,
	Text,
	Divider,
	useColorModeValue,
	Box,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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
	const bgColor = useColorModeValue('gray.100', 'gray.800')
	const [linksBgColors, setLinksBgColor] = useState('#CBD5E0')
	const [socialName, setSocialName] = useState('')
	useEffect(() => {
		const socialsNames = [
			'facebook',
			'instagram',
			'twitter',
			'twitch',
			'youtube',
		]
		socialsNames.forEach((sName) => {
			if (giveaway.giveaway_link.includes(sName)) {
				setSocialName(sName)
			}
		})
	}, [giveaway])
	useEffect(() => {
		switch (socialName) {
			case 'youtube':
				setLinksBgColor('#E53E3E')
				return
			case 'facebook':
				setLinksBgColor('#4299E1')
				return
			case 'instagram':
				setLinksBgColor('#D53F8C')
				return
			case 'twitter':
				setLinksBgColor('#00B5D8')
				return
			case 'twitch':
				setLinksBgColor('#805AD5')
				return
			default:
				setLinksBgColor('#A0AEC0')
		}
	}, [socialName])
	return (
		<>
			<VStack
				border={'1px'}
				borderRadius={'10px'}
				w={'full'}
				p={'5px'}
				px={'10px'}
				align={'flex-start'}
				bgColor={bgColor}
				boxShadow='lg'
			>
				<HStack w={'full'} justify={'space-between'}>
					<Text>{giveaway.name}</Text>

					{userID === giveaway.owner && (
						<UpdateGiveaway
							giveaway={giveaway}
							userID={userID}
							regions={regions}
							categories={categories}
							setCreatedGiveaway={setCreatedGiveaway}
						/>
					)}
				</HStack>
				<Divider />
				<HStack
					w={'full'}
					justify={'space-between'}
					border={'2px'}
					bgColor={linksBgColors}
					borderRadius={32}
					pr={5}
					boxShadow={'inner'}
				>
					{giveaway.giveaway_images ? (
						<GiveawayImage
							photo={giveaway.giveaway_images[0]}
							id={giveaway.id}
							bgColor={bgColor}
						/>
					) : (
						<GiveawayImage
							photo='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
							id={giveaway.id}
							bgColor={bgColor}
						/>
					)}
					<SocialIconLink url={giveaway.giveaway_link} />
				</HStack>
			</VStack>
		</>
	)
}

export default GiveawayCard
