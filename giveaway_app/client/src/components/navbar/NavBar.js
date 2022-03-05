import React from 'react'
import Logo from './components/Logo'
import MenuLinks from './components/MenuLinks'
import MenuToggle from './components/MenuToggle'
import SearchBar from './components/SearchBar'

import { VStack, HStack } from '@chakra-ui/react'

const NavBar = () => {
	const [isOpen, setIsOpen] = React.useState(false)

	const toggle = () => setIsOpen(!isOpen)

	return (
		<VStack as='nav'>
			<HStack justify='space-between' p={{ base: 4, md: 8 }} w='100%'>
				<Logo />
				<SearchBar />

				<MenuToggle toggle={toggle} isOpen={isOpen} />
				<MenuLinks mdDisplay='block' />
			</HStack>
			<MenuLinks mdDisplay='none' isOpen={isOpen} />
		</VStack>
	)
}

export default NavBar
