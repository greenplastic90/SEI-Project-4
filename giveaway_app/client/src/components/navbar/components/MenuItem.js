import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({ children, to = '/' }) => {
	return (
		<Link to={to}>
			<Text display='block'>{children}</Text>
		</Link>
	)
}

export default MenuItem
