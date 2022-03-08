import React, { useState } from "react"
import { Text, VStack, Box, Flex, HStack, Image, Divider, Tag, AspectRatio } from '@chakra-ui/react'
import { userIsAuthenticated, getPayload } from '../../../enviroment/auth'

// Components
import CommentButtons from './CommentButtons'

const CommentCard = ({ comment, setNewComment }) => {
    const userIsOwner = () => {
        const payload = getPayload()
        if (!getPayload()) return
        return payload.sub
    }

    return (
        <VStack w={'full'} id='flex'>
            <HStack w={'full'} id='HS' justify={'space-between'}>
                <HStack>
                    <VStack >
                        <AspectRatio ratio={1} w={'50px'}><Image fallbackSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm7iKDRSxqEpHVRB5FzOEVIg_ouNU10pQ8YGgVQhY7MqLSqmEQBXo_t5dfXi5ImExW6Y&usqp=CAU' src={comment.owner.profile_image} borderRadius={'15px'} alt='Profile' /></AspectRatio>
                    </VStack>
                    <VStack>
                        <Box w={'full'}>
                            <Text textAlign={'justify'}>
                                <Tag variant="outline" colorScheme={userIsOwner() === comment.owner.id ? 'teal' : 'yellow'}>{comment.owner.username}:</Tag> {comment.text}
                            </Text>
                            <Tag mt={1} size={'sm'} textAlign={'right'}>Posted: {comment.created_at.slice(0, 10)}</Tag>
                        </Box>
                    </VStack>
                </HStack>
                <VStack pb={2}>
                    {userIsOwner() === comment.owner.id && <CommentButtons comment={comment} id={comment.id} setNewComment={setNewComment} />}
                </VStack>
            </HStack>
            <Divider />
        </VStack>
    )

}

export default CommentCard