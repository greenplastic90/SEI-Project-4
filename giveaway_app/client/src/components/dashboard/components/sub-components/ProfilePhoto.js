import { AspectRatio, Image } from '@chakra-ui/react'
import React from 'react'

const ProfilePhoto = ({ photo }) => {
	return (
		<AspectRatio ratio={1} w={24}>
			<Image
				src={photo}
				alt='user-photo'
				objectFit='cover'
				borderRadius='30px'
				fallbackSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm7iKDRSxqEpHVRB5FzOEVIg_ouNU10pQ8YGgVQhY7MqLSqmEQBXo_t5dfXi5ImExW6Y&usqp=CAU'
			/>
		</AspectRatio>
	)
}

export default ProfilePhoto
