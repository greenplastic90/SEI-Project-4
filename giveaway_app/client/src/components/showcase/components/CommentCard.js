import React from "react"
import { Text, VStack, Box, Flex, HStack, Image, Button, Divider, Tag, AspectRatio } from '@chakra-ui/react'

const CommentCard = ({ comment }) => {

    const userIsOwner = () => {
        //A function to check is logged in user is owner?
        return false
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
                                {comment.owner.username}: {comment.text}
                            </Text>
                            <Tag textAlign={'right'}>Posted: {comment.created_at.slice(0, 10)}</Tag>
                        </Box>
                        <Divider />
                    </VStack>
                </HStack>
                {userIsOwner() &&
                    <HStack>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </HStack>
                }
                <HStack>
                    <Divider />
                </HStack>
            </Flex>
        </Box>
    )

}

export default CommentCard