import React from "react"
import { GridItem, SimpleGrid, Image } from '@chakra-ui/react'
import banner6 from '../../../assets/banner6.png'

const LandingBanner = () => {

    return (
        <>
            <SimpleGrid columns={3} columnGap={2} w={'full'}>
                <GridItem colSpan={3}>
                    <Image src={banner6}/>
                </GridItem>
            </SimpleGrid>
        </>
    )
}

export default LandingBanner