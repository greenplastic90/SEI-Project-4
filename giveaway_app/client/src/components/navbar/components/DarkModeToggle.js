import React from 'react'
import { FaMoon } from '@react-icons/all-files/fa/FaMoon'
import { FaSun } from '@react-icons/all-files/fa/FaSun'
import { Button, useColorMode } from '@chakra-ui/react'

const DarkModeToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<>
			<header>
				<Button onClick={toggleColorMode}>
					{colorMode === 'light' ? <FaMoon /> : <FaSun />}
				</Button>
			</header>
		</>
	)
}

export default DarkModeToggle
