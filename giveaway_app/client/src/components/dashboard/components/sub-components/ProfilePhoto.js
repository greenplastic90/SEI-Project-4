import { AspectRatio, Image } from '@chakra-ui/react'
import React from 'react'

const ProfilePhoto = ({ photo }) => {
	return (
		<AspectRatio ratio={1} w={24}>
			<Image src={photo} alt='user-photo' />
		</AspectRatio>
	)
}

export default ProfilePhoto
