// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
	initialColorMode: 'light',
	useSystemColorMode: true,
}

const fonts = {
	heading: 'Righteous, sans-serif',
	body: 'Righteous, sans-serif',
}

// 3. extend the theme
const theme = extendTheme({ config, fonts })

export default theme
