import {
	VStack,
	Heading,
	HStack,
	useToast,
	useDisclosure,
	Button,
	Stack,
	Box,
	Divider,
} from '@chakra-ui/react'
import axios from 'axios'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import React, { useState } from 'react'
import { getLocalToken } from '../../../enviroment/auth'
import CreateOrUpdateGiveaway from './sub-components/CreateOrUpdateGiveaway'
import FollowerCount from './sub-components/FollowerCount'
import ProfilePhoto from './sub-components/ProfilePhoto'
import SocialLinks from './sub-components/SocialLinks'

const UserInfo = ({
	user,
	regions,
	categories,
	setCreatedGiveaway,
	pathName,
}) => {
	const [giveawayFormData, setGiveawayFormData] = useState({})
	const { isOpen, onOpen, onClose } = useDisclosure()
	const toast = useToast()

	const handleSubmit = async () => {
		try {
			const { data } = await axios.post(
				'/api/giveaways/',
				giveawayFormData,
				{
					headers: {
						Authorization: `Bearer ${getLocalToken()}`,
					},
				}
			)
			// Closes drawer when submit is successful
			toast({
				title: 'Giveaway Created',
				description: `${data.name}`,
				status: 'success',
				duration: 3000,
			})
			onClose()
			setCreatedGiveaway(data)
			setGiveawayFormData({})
		} catch (error) {
			// error.response.data.detail.foreach((detail) => console.log(detail))

			console.log('Errors ->', error.response.data.detail)
			console.log(
				'Error keys ->',
				Object.keys(error.response.data.detail)
			)
			const errKeys = Object.keys(error.response.data.detail)

			errKeys.forEach((key) =>
				error.response.data.detail[key].forEach((err) => {
					if (key === 'giveaway_link') key = 'Url'
					if (key === 'name') key = 'Title'
					if (key === 'description') key = 'Description'
					if (key === 'end_date') key = 'Expirey Date'
					if (key === 'giveaway_images') key = 'Image'
					if (key === 'regions') key = 'Regions'
					if (key === 'category') key = 'Category'
					toast({
						title: 'Ooops',
						description: `${key} - ${err}`,
						status: 'error',
						duration: null,
						isClosable: true,
					})
				})
			)
		}
	}
	return (
		<VStack
			spacing={5}
			w={'full'}
			boxShadow='dark-lg'
			borderRadius={30}
			pb={'10'}
			border={'1px'}
		>
			<Stack
				w={'full'}
				direction={['row', 'row', 'column']}
				justify={'space-between'}
				align={['center']}
			>
				<Box>
					<ProfilePhoto photo={user.profile_image} />
				</Box>
				<VStack w={'full'} justifySelf={'flex-start'} spacing={5}>
					<Heading size='lg'>{user.username}</Heading>
					<HStack spacing={1}>
						{user.first_name && (
							<Heading size='sm'>{user.first_name}</Heading>
						)}
						{user.last_name && (
							<Heading size='sm'>{user.last_name}</Heading>
						)}
					</HStack>
					<SocialLinks socialUrls={user.socials} />
				</VStack>
			</Stack>

			<Divider />
			<Stack
				w={'full'}
				direction={['row', 'row', 'column']}
				align={'center'}
				justify={'space-around'}
			>
				{pathName === '/profile' && (
					<VStack>
						<Heading size={'xs'} color={'red.500'}>
							btn under construction
						</Heading>
						<Button leftIcon={<FaPlus />}>Update Profile</Button>
					</VStack>
				)}
				{user.is_verified && pathName === '/dashboard' && (
					<>
						<Button
							bgColor={'orange.400'}
							leftIcon={<FaPlus />}
							onClick={onOpen}
						>
							Create Giveaway
						</Button>
						<CreateOrUpdateGiveaway
							regions={regions}
							categories={categories}
							userID={user.id}
							setCreatedGiveaway={setCreatedGiveaway}
							giveawayFormData={giveawayFormData}
							setGiveawayFormData={setGiveawayFormData}
							handleSubmit={handleSubmit}
							isOpen={isOpen}
							onClose={onClose}
						/>
					</>
				)}
				{user.is_verified && pathName === '/dashboard' && (
					<FollowerCount
						title={'Your Followers'}
						userList={user.followers}
					/>
				)}
				{!user.is_verified && (
					<FollowerCount
						title={"You're Following"}
						userList={user.followers}
					/>
				)}
			</Stack>
		</VStack>
	)
}

export default UserInfo
