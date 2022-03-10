import React, { useEffect, useState } from 'react'
import { FaLink } from '@react-icons/all-files/fa/FaLink'
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import { SiInstagram } from '@react-icons/all-files/si/SiInstagram'
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter'
import { FiTwitch } from '@react-icons/all-files/fi/FiTwitch'
import { FiYoutube } from '@react-icons/all-files/fi/FiYoutube'
import { AspectRatio, Box, Link, Text } from '@chakra-ui/react'

export const SocialIconLink = ({ url }) => {
	const [icon, setIcon] = useState(<FaLink />)
	const [socialName, setSocialName] = useState('')

	useEffect(() => {
		const socialsNames = [
			'facebook',
			'instagram',
			'twitter',
			'twitch',
			'youtube',
		]
		socialsNames.forEach((sName) => {
			if (url.includes(sName)) {
				setSocialName(sName)
			}
		})
	}, [url])

	useEffect(() => {
		switch (socialName) {
			case 'youtube':
				setIcon(<FiYoutube />)
				return
			case 'facebook':
				setIcon(<FaFacebookF />)
				return
			case 'instagram':
				setIcon(<SiInstagram />)
				return
			case 'twitter':
				setIcon(<FiTwitter />)
				return
			case 'twitch':
				setIcon(<FiTwitch />)
				return
			default:
				setIcon(<FaLink />)
		}
	}, [socialName])

	return (
		<Box>
			<Link href={url} target={'_blank'}>
				<AspectRatio ratio={1} w={8}>
					{icon}
				</AspectRatio>
			</Link>
		</Box>
	)
}
