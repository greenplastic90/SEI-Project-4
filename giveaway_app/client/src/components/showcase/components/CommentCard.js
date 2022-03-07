import React, { useState } from "react"
import { Text, VStack, Box, Flex, HStack, Image, Button, Divider, Tag, AspectRatio } from '@chakra-ui/react'
import { userIsAuthenticated, getPayload } from '../../../enviroment/auth'

// Components
import CommentButtons from './CommentButtons'

const CommentCard = ({ comment }) => {

    const userIsOwner = () => {
        const payload = getPayload()
        return payload.sub
    }

    return (
        <Box>
            <Flex>
                <HStack>
                    <VStack>
                        <AspectRatio ratio={1} w={'50px'}><Image fallbackSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm7iKDRSxqEpHVRB5FzOEVIg_ouNU10pQ8YGgVQhY7MqLSqmEQBXo_t5dfXi5ImExW6Y&usqp=CAU' src={comment.owner.profile_image} borderRadius={'15px'} alt='Profile' /></AspectRatio>
                    </VStack>
                    <VStack>
                        <Box>
                            <Text>
                                <Tag variant="outline" colorScheme={userIsOwner() === comment.owner.id ? 'teal' : 'yellow'}>{comment.owner.username}:</Tag> {comment.text}
                            </Text>
                            <Tag size={'sm'} textAlign={'right'}>Posted: {comment.created_at.slice(0, 10)}</Tag>
                        </Box>
                        <Divider />
                    </VStack>
                </HStack>
                {userIsOwner() === comment.owner.id && <CommentButtons />}
                <HStack>
                    <Divider />
                </HStack>
            </Flex>
        </Box>
    )

}

export default CommentCard