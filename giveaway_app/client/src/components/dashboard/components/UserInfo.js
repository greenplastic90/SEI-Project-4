import { VStack } from '@chakra-ui/react'
import React from 'react'
import CreateGiveaway from './sub-components/CreateGiveaway'
import FollowerCount from './sub-components/FollowerCount'
import ProfilePhoto from './sub-components/ProfilePhoto'

const UserInfo = ({ user, regions, categories, setCreatedGiveaway }) => {
	return (
		<VStack>
			<ProfilePhoto photo={user.profile_image} />
			<CreateGiveaway
				regions={regions}
				categories={categories}
				userID={user.id}
				setCreatedGiveaway={setCreatedGiveaway}
			/>
			<FollowerCount />
		</VStack>
	)
}

export default UserInfo
