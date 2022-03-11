import React from 'react'
import Logo from './components/Logo'
import MenuLinks from './components/MenuLinks'
import MenuToggle from './components/MenuToggle'
import SearchBar from './components/SearchBar'
import DarkModeToggle from './components/DarkModeToggle'
import { VStack, HStack } from '@chakra-ui/react'

const NavBar = ({ isVerified, setSearchText, serachText, colour }) => {
	const [isOpen, setIsOpen] = React.useState(false)

	const toggle = () => setIsOpen(!isOpen)

	return (
		<VStack as='nav' borderBottom={'1px'}>
			<HStack justify='space-between' p={{ base: 4, md: 8 }} w='100%'>
				<Logo />

				<SearchBar
					setSearchText={setSearchText}
					serachText={serachText}
                    colour={colour}
				/>

				<HStack spacing={4}>
					<DarkModeToggle />
					<MenuToggle toggle={toggle} isOpen={isOpen} />
					<MenuLinks isVerified={isVerified} mdDisplay='block' />
				</HStack>
			</HStack>
			<MenuLinks
				isVerified={isVerified}
				mdDisplay='none'
				isOpen={isOpen}
			/>
		</VStack>
	)
}

export default NavBar
