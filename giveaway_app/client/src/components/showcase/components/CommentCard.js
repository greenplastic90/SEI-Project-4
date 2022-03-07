import React from "react"
import { Text, VStack, Box, Flex, HStack, Image, Button, Divider, Tag } from '@chakra-ui/react'

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
                        <Image src={comment.owner.profile_image} boxSize={'50px'} borderRadius={'25px'} alt='Profile' />
                    </VStack>
                    <VStack>
                        <Text>{comment.owner.username}: {comment.text}</Text>
                    </VStack>
                    <Tag>Posted: {comment.created_at}</Tag>
                </HStack>
                {userIsOwner() &&
                    <HStack>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </HStack>
                }
                <Divider/>
            </Flex>
        </Box>
    )

}

export default CommentCard