import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import AvatarArray from './AvatarArray'

const FollowerCount = ({ userList, title }) => {
	return (
		<VStack spacing={4}>
			<Heading size='md'>{title}</Heading>
			<AvatarArray userList={userList} />
		</VStack>
	)
}

export default FollowerCount
