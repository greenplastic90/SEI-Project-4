import {
	VStack,
	Heading,
	HStack,
	useToast,
	useDisclosure,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { getLocalToken } from '../../../enviroment/auth'
import CreateOrUpdateGiveaway from './sub-components/CreateOrUpdateGiveaway'
import FollowerCount from './sub-components/FollowerCount'
import ProfilePhoto from './sub-components/ProfilePhoto'
import SocialLinks from './sub-components/SocialLinks'

const UserInfo = ({ user, regions, categories, setCreatedGiveaway }) => {
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
		<VStack spacing={4} w={'full'}>
			<ProfilePhoto photo={user.profile_image} />
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
			<CreateOrUpdateGiveaway
				regions={regions}
				categories={categories}
				userID={user.id}
				setCreatedGiveaway={setCreatedGiveaway}
				giveawayFormData={giveawayFormData}
				setGiveawayFormData={setGiveawayFormData}
				handleSubmit={handleSubmit}
				onOpen={onOpen}
				isOpen={isOpen}
				onClose={onClose}
			/>
			<FollowerCount userList={user.followers} />
		</VStack>
	)
}

export default UserInfo
