import {
	AspectRatio,
	HStack,
	Text,
	Image,
	VStack,
	Heading,
} from '@chakra-ui/react'
import React from 'react'

const AvatarArray = ({ userList }) => {
	return (
		<VStack>
			<HStack spacing={-2}>
				{userList ? (
					userList.map((user, i) => {
						if (i < 4) {
							return (
								<Avatar
									key={user.id}
									photo={user.profile_image}
								/>
							)
						} else {
							return null
						}
					})
				) : (
					<Text>None yet!</Text>
				)}
			</HStack>
			{userList && userList.length > 4 && (
				<Heading size='xs'> and {userList.length - 4} more</Heading>
			)}
		</VStack>
	)
}

export default AvatarArray

const Avatar = ({ photo }) => {
	return (
		<AspectRatio ratio={1} w={10}>
			<Image
				src={photo}
				objectFit='cover'
				borderRadius='15px'
				border={'1px'}
				borderColor={'gray500'}
				fallbackSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm7iKDRSxqEpHVRB5FzOEVIg_ouNU10pQ8YGgVQhY7MqLSqmEQBXo_t5dfXi5ImExW6Y&usqp=CAU'
			/>
		</AspectRatio>
	)
}
