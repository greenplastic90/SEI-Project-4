import {
	VStack,
	Text,
	SimpleGrid,
	GridItem,
	useBreakpointValue,
	Heading,
	Box,
} from '@chakra-ui/react'
import React from 'react'
import GiveawayCard from './sub-components/GiveawayCard'

const ActiveGiveaways = ({
	title,
	giveaways,
	userID,
	regions,
	categories,
	setCreatedGiveaway,
	pathName,
}) => {
	const colSpan = useBreakpointValue([3, 3, 2])
	return (
		<VStack w={'full'} spacing={[10, 10, 20]}>
			<VStack
				boxShadow={'dark-lg'}
				p={3}
				borderRadius={30}
				border={'1px'}
				w={'full'}
			>
				<Heading size={'lg'}>{title}</Heading>
			</VStack>

			<SimpleGrid
				columns={6}
				w={'full'}
				rowGap={5}
				columnGap={5}
				boxShadow={'dark-lg'}
				p={3}
				borderRadius={20}
				border={'1px'}
			>
				{giveaways ? (
					giveaways.map((giveaway) => (
						<GridItem key={giveaway.id} colSpan={colSpan}>
							<GiveawayCard
								giveaway={giveaway}
								userID={userID}
								regions={regions}
								categories={categories}
								setCreatedGiveaway={setCreatedGiveaway}
								pathName={pathName}
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
