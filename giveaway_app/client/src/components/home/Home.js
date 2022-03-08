import React from 'react'
import { Spinner } from '@chakra-ui/react'

// Components
import ChakraCarouselHub from './carousel/ChakraCarouselHub'

const Home = ({ giveaways }) => {
	return (
		<>
        {giveaways ? 
        
        <ChakraCarouselHub giveaways={giveaways}/> 


        : 
        <Spinner/>}
		</>
	)
}

export default Home
