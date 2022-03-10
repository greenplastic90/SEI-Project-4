import { Center, Divider, HStack, Text } from "@chakra-ui/react"
import React from "react"

const Footer = () => {



    return(
        <> 
        <Divider/>
        <HStack w={'100%'} justifyContent={'center'} py={4}>
            <Text>Made by </Text><Text>Bashar </Text>and <Text>Mayur</Text>
        </HStack>
        </>
    )
}

export default Footer