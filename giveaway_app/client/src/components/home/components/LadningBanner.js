import React from "react"
import { GridItem, SimpleGrid, Image } from '@chakra-ui/react'
import banner4 from '../../../assets/banner4.png'

const LandingBanner = () => {

    return (
        <>
            <SimpleGrid columns={3} columnGap={2} w={'full'}>
                <GridItem colSpan={3}>
                    <Image src={banner4}/>
                </GridItem>
            </SimpleGrid>
        </>
    )
}

export default LandingBanner