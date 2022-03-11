import { HStack, Text } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
const Footer = () => {



    return (
        <HStack w={'100%'} justifyContent={'center'} py={4} borderTop={'1px solid gray'}>
            <Text>Made by </Text> <a target={'_blank'} rel="noreferrer" href={'https://github.com/greenplastic90'}><Text>Bashar </Text></a>  <Text>and</Text> <a target={'_blank'} rel="noreferrer" href={'https://github.com/Kumasta'}><Text>Mayur</Text></a>
        </HStack>
    )
}

export default Footer