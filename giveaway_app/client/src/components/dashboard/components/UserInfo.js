import { VStack } from '@chakra-ui/react'
import React from 'react'
import CreateGiveaway from './sub-components/CreateGiveaway'
import FollowerCount from './sub-components/FollowerCount'
import ProfilePhoto from './sub-components/ProfilePhoto'

const UserInfo = ({ user }) => {
	return (
		<VStack>
			<ProfilePhoto photo={user.profile_image} />
			<CreateGiveaway />
			<FollowerCount />
		</VStack>
	)
}

export default UserInfo
