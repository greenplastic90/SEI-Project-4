import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({ children, to = '/', func }) => {
	return (
		<Link onClick={func} to={to} >
			<Text _hover={{textDecoration: 'underline'}} display='block'>{children}</Text>
		</Link>
	)
}

export default MenuItem
