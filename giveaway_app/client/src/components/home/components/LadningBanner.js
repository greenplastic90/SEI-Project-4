import React from "react"
import { GridItem, SimpleGrid, Image } from '@chakra-ui/react'
import banner9 from '../../../assets/banner9.png'

const LandingBanner = () => {

    return (
        <>
            <SimpleGrid mb={5} columns={3} columnGap={2} w={'full'}>
                <GridItem colSpan={3}>
                    <Image src={banner9}/>
                </GridItem>
            </SimpleGrid>
        </>
    )
}

export default LandingBanner