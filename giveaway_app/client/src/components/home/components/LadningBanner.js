import React from "react"
import { GridItem, SimpleGrid, Image } from '@chakra-ui/react'
import banner7 from '../../../assets/banner7.png'

const LandingBanner = () => {

    return (
        <>
            <SimpleGrid mb={5} columns={3} columnGap={2} w={'full'}>
                <GridItem colSpan={3}>
                    <Image src={banner7}/>
                </GridItem>
            </SimpleGrid>
        </>
    )
}

export default LandingBanner