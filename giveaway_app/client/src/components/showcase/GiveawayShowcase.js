import React, { useEffect, useState } from 'react'
import { VStack, HStack, Text, Heading, Image, Stack, Tag, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ProfilePhoto from '../dashboard/components/sub-components/ProfilePhoto'
import ProfilePopover from './showcase-components/ProfilePopover'

import WatchListAvatars from './showcase-components/WatchlistAvartas'

const GiveawayShowcase = ({ giveaway, setIsGiveawayUpdate, colour }) => {
	useEffect(() => {
		const interval = setInterval(() => {
			const difference = +new Date(giveaway.end_date).valueOf() - +new Date()
			let remaining = 'c'

			if (difference > 0) {
				const parts = {
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60),
				}
				remaining = `Time left: ${parts.days}d - ${parts.hours} : ${parts.minutes} : ${parts.seconds}`
				document.getElementById('countdown').innerHTML = remaining
			}
		}, 1000)
		return () => clearInterval(interval)
	}, [giveaway])

	return (
		<>
			<VStack w={'full'}>
				<Heading alignSelf={'flex-start'}> {giveaway.name}</Heading>
				<Stack
					w={'full'}
					justifyContent={'space-evenly'}
					align-items={'flex-start'}
					direction={{ base: 'column', md: 'row' }}>
					<VStack align-items={'flex-start'}>
						{giveaway.giveaway_images ? (
							<Image
								src={giveaway.giveaway_images[0]}
								alt='Giveaway'
								borderRadius={30}
								boxShadow='dark-lg'
							/>
						) : (
							<Image
								alt='Giveaway'
								src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
								borderRadius={30}
								boxShadow='dark-lg'
							/>
						)}
					</VStack>
					<Stack align-items={'flex-start'} direction={{ md: 'column', sm: 'row' }}>
						<VStack>
							<ProfilePhoto photo={giveaway.owner.profile_image} />
							<ProfilePopover giveaway={giveaway} colour={colour} />
						</VStack>
						<VStack w={'100%'}>
							<Tag w={'100%'} bgColor={colour} alignSelf={'flex-start'}>
								Category: {giveaway.category.name}
							</Tag>
							<Tag w={'100%'} bgColor={colour} alignSelf={'flex-start'}>
								Region: {giveaway.regions[0].name}
							</Tag>
							<Tag w={'100%'} bgColor={colour} id='countdown'>
								Ended
							</Tag>
							<Tag w={'100%'} bgColor={colour} alignSelf={'flex-start'}>
								Winner: {giveaway.winner}
							</Tag>
						</VStack>
					</Stack>
				</Stack>
				<HStack w={'100%'} minH={'40px'}>
					<WatchListAvatars
						userlist={giveaway.watcher_list}
						sizeBig={true}
						giveawayId={giveaway.id}
						setIsGiveawayUpdate={setIsGiveawayUpdate}
					/>
				</HStack>
				<VStack w={'full'} alignItems={'flex-start'} alignContent={'flex-start'}>
					<Heading alignSelf={'flex-start'} size={'md'}>
						Description
					</Heading>
					<Text whiteSpace={'pre-line'} textAlign={'justify'}>
						{giveaway.description}
					</Text>
					<HStack w={'100%'} justifyContent={'space-between'}>
						<Link href={giveaway.giveaway_link} target={'_blank'}>
							<Tag bgColor={colour} size={'lg'} colorScheme={'facebook'}>
								Go to Giveaway: <ExternalLinkIcon mx='2px' />
							</Tag>
						</Link>
						<Tag bgColor={colour} size={'lg'}>
							End: {giveaway.end_date.slice(0, 10)}
						</Tag>
					</HStack>
				</VStack>
			</VStack>
		</>
	)
}

export default GiveawayShowcase
