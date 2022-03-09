import React, { useEffect, useState } from 'react'
import { FaPlus } from '@react-icons/all-files/fa/FaPlus'
import Select from 'react-select'
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Stack,
	Box,
	FormLabel,
	Input,
	InputGroup,
	InputLeftAddon,
	Textarea,
	Text,
} from '@chakra-ui/react'
import axios from 'axios'

const CreateOrUpdateGiveaway = ({
	regions,
	categories,
	userID,
	setGiveawayFormData,
	giveawayFormData,
	handleSubmit,
	onOpen,
	isOpen,
	onClose,
}) => {
	const firstField = React.useRef()

	const [count, setCount] = useState(0)

	useEffect(() => {
		setGiveawayFormData({ ...giveawayFormData, owner: userID })
	}, [userID])

	const handelCategorySelection = (e) => {
		setGiveawayFormData({ ...giveawayFormData, category: e.id })
	}
	const handelRegionSelections = (e) => {
		console.log('e ->', e)
		const arrIDs = e.map((region) => region.id)
		const newValue = {
			...giveawayFormData,
			regions: arrIDs,
		}
		setGiveawayFormData(newValue)
	}

	const handleChange = (e) => {
		const newValue = {
			...giveawayFormData,
			[e.target.name]: e.target.value,
		}
		setCount(e.target.value.length)
		setGiveawayFormData(newValue)
	}
	const handelImageUpload = async (e) => {
		try {
			const data = new FormData()
			data.append('file', e.target.files[0])
			data.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET)

			const res = await axios.post(
				process.env.REACT_APP_CLOUDINARY_URL,
				data
			)

			console.log('URL from cloudinary -->', res.data.url)
			setGiveawayFormData({
				...giveawayFormData,
				giveaway_images: [res.data.url],
			})
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<>
			<Button leftIcon={<FaPlus />} onClick={onOpen}>
				Create Giveaway
			</Button>
			<Drawer
				isOpen={isOpen}
				placement='right'
				initialFocusRef={firstField}
				onClose={onClose}
			>
				<DrawerOverlay />

				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth='1px'>
						Create a new giveaway
					</DrawerHeader>

					<DrawerBody>
						<Stack spacing='24px'>
							{/* TITLE */}
							<Box>
								<FormLabel htmlFor='name'>Title</FormLabel>
								<Input
									onChange={handleChange}
									ref={firstField}
									id='name'
									name='name'
									placeholder='Please enter giveaway title'
									isRequired
								/>
							</Box>
							<Box>
								<FormLabel htmlFor='images'>Image</FormLabel>
								<Input
									onChange={handelImageUpload}
									type='file'
									id='images'
								/>
							</Box>

							{/* URL */}
							<Box>
								<FormLabel htmlFor='url'>
									Giveaway Url
								</FormLabel>
								<InputGroup>
									<InputLeftAddon>http://</InputLeftAddon>
									<Input
										onChange={handleChange}
										type='url'
										id='giveaway_link'
										name='giveaway_link'
										placeholder='Please enter domain'
										isRequired
									/>
								</InputGroup>
							</Box>

							{/* REGION */}
							<Box>
								<FormLabel htmlFor='region'>Regions</FormLabel>
								<Select
									onChange={handelRegionSelections}
									id='regions'
									isMulti
									name='regions'
									options={regions}
									isRequired
								/>
							</Box>

							{/* Category */}
							<Box>
								<FormLabel htmlFor='category'>
									Category
								</FormLabel>
								<Select
									onChange={handelCategorySelection}
									id='category'
									name='category'
									options={categories}
									isRequired
								/>
							</Box>

							{/* DESCRIPTION */}
							<Box>
								<FormLabel htmlFor='description'>
									Description
								</FormLabel>
								<Textarea
									onChange={handleChange}
									id='description'
									name='description'
									isRequired
								/>
								<Text fontSize={'sm'}>{`${count}/2000`}</Text>
							</Box>

							{/* Expiry Date */}
							<Box>
								<FormLabel htmlFor='end_date'>
									Giveaway Expirey Date
								</FormLabel>
								<input
									required
									type='date'
									name='end_date'
									onChange={handleChange}
									placeholder='date'
								/>
							</Box>
						</Stack>
					</DrawerBody>

					<DrawerFooter borderTopWidth='1px'>
						<Button variant='outline' mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button onClick={handleSubmit} colorScheme='blue'>
							Submit
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default CreateOrUpdateGiveaway
