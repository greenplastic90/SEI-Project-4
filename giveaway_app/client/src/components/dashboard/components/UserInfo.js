import { VStack } from '@chakra-ui/react'
import React from 'react'
import CreateGiveaway from './sub-components/CreateGiveaway'
import FollowerCount from './sub-components/FollowerCount'
import ProfilePhoto from './sub-components/ProfilePhoto'

const UserInfo = ({ user, regions, categories }) => {
	return (
		<VStack>
			<ProfilePhoto photo={user.profile_image} />
			<CreateGiveaway regions={regions} categories={categories} />
			<FollowerCount />
		</VStack>
	)
}

export default UserInfo
