import React, { useState } from 'react'
import { FaEdit } from '@react-icons/all-files/fa/FaEdit'
import { AspectRatio, Button, useDisclosure, useToast } from '@chakra-ui/react'

const UpdateGiveaway = () => {
	const [giveawayFormData, setGiveawayFormData] = useState({})
	const { isOpen, onOpen, onClose } = useDisclosure()
	const toast = useToast()
	return (
		<>
			<Button size={'sm'}>
				<AspectRatio ratio={1} w={6}>
					<FaEdit />
				</AspectRatio>
			</Button>
		</>
	)
}

export default UpdateGiveaway
