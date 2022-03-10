import React from 'react'
import { AspectRatio, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const GiveawayImage = ({ photo, id, bgColor }) => {
	return (
		<Link to={`/giveaway/${id}`}>
			<AspectRatio ratio={1} w={'80px'}>
				<Image
					src={photo}
					alt='user-photo'
					objectFit='cover'
					border={'1px'}
					borderColor={'gray500'}
					borderRadius='30px'
					p={'5px'}
					fallbackSrc='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
					_hover={{ padding: '0px' }}
					bgColor={bgColor}
				/>
			</AspectRatio>
		</Link>
	)
}

export default GiveawayImage
