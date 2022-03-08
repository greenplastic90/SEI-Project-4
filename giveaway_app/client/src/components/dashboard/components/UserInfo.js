import { VStack, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import CreateGiveaway from './sub-components/CreateGiveaway'
import FollowerCount from './sub-components/FollowerCount'
import ProfilePhoto from './sub-components/ProfilePhoto'

const UserInfo = ({ user, regions, categories, setCreatedGiveaway }) => {
	return (
		<VStack spacing={4}>
			<ProfilePhoto photo={user.profile_image} />
			<Heading size='lg'>{user.username}</Heading>
			<HStack>
				{user.first_name && (
					<Heading size='sm'>{user.first_name}</Heading>
				)}
				{user.last_name && (
					<Heading size='sm'>{user.last_name}</Heading>
				)}
			</HStack>
			<CreateGiveaway
				regions={regions}
				categories={categories}
				userID={user.id}
				setCreatedGiveaway={setCreatedGiveaway}
			/>
			<FollowerCount userList={user.followers} />
		</VStack>
	)
}

export default UserInfo
