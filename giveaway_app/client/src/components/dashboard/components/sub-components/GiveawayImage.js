import React from 'react'
import { AspectRatio, Image } from '@chakra-ui/react'
const GiveawayImage = ({ photo }) => {
	return (
		<AspectRatio ratio={1} w={'80px'}>
			<Image
				src={photo}
				alt='user-photo'
				objectFit='cover'
				border={'1px'}
				borderColor={'gray500'}
				borderRadius='30px'
				fallbackSrc='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
			/>
		</AspectRatio>
	)
}

export default GiveawayImage
