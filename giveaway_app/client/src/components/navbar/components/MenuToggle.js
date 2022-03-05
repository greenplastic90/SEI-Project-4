import React from 'react'
import { Box } from '@chakra-ui/react'
import { FaGripLines } from '@react-icons/all-files/fa/FaGripLines'
import { FaGripLinesVertical } from '@react-icons/all-files/fa/FaGripLinesVertical'

const MenuToggle = ({ toggle, isOpen }) => {
	return (
		<Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
			{isOpen ? <FaGripLinesVertical /> : <FaGripLines />}
		</Box>
	)
}

export default MenuToggle
