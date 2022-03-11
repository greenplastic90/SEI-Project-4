import { AspectRatio, Image } from '@chakra-ui/react'
import React from 'react'

const ProfilePhoto = ({ photo }) => {
	return (
		<AspectRatio ratio={1} w={200}>
			<Image
				src={photo}
				alt='user-photo'
				objectFit='cover'
				border={'1px'}
				borderColor={'gray500'}
				borderTopLeftRadius={30}
				borderTopRightRadius={[0, 0, 30]}
				fallbackSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm7iKDRSxqEpHVRB5FzOEVIg_ouNU10pQ8YGgVQhY7MqLSqmEQBXo_t5dfXi5ImExW6Y&usqp=CAU'
			/>
		</AspectRatio>
	)
}

export default ProfilePhoto
