import React from "react"
import { Text, VStack, Box, Flex, HStack, Image, Button, Divider, Tag, AspectRatio } from '@chakra-ui/react'
import { FaEdit } from "@react-icons/all-files/fa/FaEdit"
import { FiDelete } from "@react-icons/all-files/fi/FiDelete"

const CommentButtons = () => {


    return (
        <>
            <HStack>
                <Button><FaEdit /></Button>
                <Button><FiDelete /></Button>
            </HStack>
        </>
    )
}

export default CommentButtons
