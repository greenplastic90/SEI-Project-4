import React from 'react'
import Logo from './components/Logo'
import MenuLinks from './components/MenuLinks'
import MenuToggle from './components/MenuToggle'

import NavBarContainer from './components/NavBarContainer'

const NavBar = () => {
	const [isOpen, setIsOpen] = React.useState(false)

	const toggle = () => setIsOpen(!isOpen)

	return (
		<NavBarContainer>
			<Logo />
			<MenuToggle toggle={toggle} isOpen={isOpen} />
			<MenuLinks isOpen={isOpen} />
		</NavBarContainer>
	)
}

export default NavBar
