import { Heading, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { SocialIconLink } from '../../../helpers/SocialIconLink'

const SocialLinks = ({ socialUrls }) => {
	return (
		<VStack>
			<Heading size={'xs'}>Socials</Heading>
			{socialUrls && (
				<HStack spacing={5} wrap={'wrap'}>
					{socialUrls.map((url) => (
						<SocialIconLink key={url} url={url} />
					))}
				</HStack>
			)}
		</VStack>
	)
}

export default SocialLinks
