import React from 'react'

// Components
import ChakraCarouselHub from './carousel/ChakraCarouselHub'

const Home = ({ giveaways }) => {
	return (
		<>
			<ChakraCarouselHub giveaways={giveaways}/>
		</>
	)
}

export default Home
