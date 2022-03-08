import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import AvatarArray from './AvatarArray'

const FollowerCount = ({ userList }) => {
	return (
		<VStack spacing={4}>
			<Heading size='md'>Followers</Heading>
			<AvatarArray userList={userList} />
		</VStack>
	)
}

export default FollowerCount
