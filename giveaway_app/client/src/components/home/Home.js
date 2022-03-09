import React, { useState, useEffect } from 'react'
import { Flex, Spinner, Container, VStack } from '@chakra-ui/react'
import axios from 'axios'

// Components
import ChakraCarouselHub from './carousel/ChakraCarouselHub'
import LandingBanner from './components/LadningBanner'

const Home = ({ createdGiveaway }) => {
    const [giveaways, setGivaeaways] = useState([])
    useEffect(
        () => {
            const getGiveaways = async () => {
                try {
                    const { data } = await axios.get('api/giveaways/')
                    setGivaeaways(data)
                    // console.log(giveaways)
                } catch (err) {
                    console.log(err)
                }
            }
            getGiveaways()
        }, [createdGiveaway], []
    )

    return (
        <Container
            py={2}
            px={0}
            maxW={{
                base: '100%',
                sm: '35rem',
                md: '43.75rem',
                lg: '57.5rem',
                xl: '75rem',
                xxl: '87.5rem',
            }}
        >
            <VStack>
                <LandingBanner />
                {giveaways ?


                    <ChakraCarouselHub giveaways={giveaways} />

                    :
                    <Spinner />}
            </VStack>
        </Container>
    )
}

export default Home
