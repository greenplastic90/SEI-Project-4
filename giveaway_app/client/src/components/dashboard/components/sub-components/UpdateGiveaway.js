import React, { useState } from 'react'
import { FaEdit } from '@react-icons/all-files/fa/FaEdit'
import { AspectRatio, Button, useDisclosure, useToast } from '@chakra-ui/react'
import CreateOrUpdateGiveaway from './CreateOrUpdateGiveaway'
import axios from 'axios'
import { getLocalToken } from '../../../../enviroment/auth'

const UpdateGiveaway = ({
	giveaway,
	userID,
	regions,
	categories,
	setCreatedGiveaway,
}) => {
	const [giveawayFormData, setGiveawayFormData] = useState({})
	const { isOpen, onOpen, onClose } = useDisclosure()
	const toast = useToast()

	const handleSubmit = async () => {
		try {
			const { data } = await axios.put(
				`/api/giveaways/${giveaway.id}/`,
				giveawayFormData,
				{
					headers: {
						Authorization: `Bearer ${getLocalToken()}`,
					},
				}
			)
			toast({
				title: 'Giveaway Updated',
				description: `${data.name}`,
				status: 'success',
				duration: 3000,
			})
			onClose()
			setCreatedGiveaway(data)
			setGiveawayFormData({})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<Button size={'sm'} onClick={onOpen} bgColor={'orange.400'}>
				<AspectRatio ratio={1} w={6}>
					<FaEdit />
				</AspectRatio>
			</Button>
			<CreateOrUpdateGiveaway
				regions={regions}
				categories={categories}
				userID={userID}
				setCreatedGiveaway={setCreatedGiveaway}
				giveawayFormData={giveawayFormData}
				setGiveawayFormData={setGiveawayFormData}
				handleSubmit={handleSubmit}
				isOpen={isOpen}
				onClose={onClose}
				giveaway={giveaway}
			/>
		</>
	)
}

export default UpdateGiveaway
