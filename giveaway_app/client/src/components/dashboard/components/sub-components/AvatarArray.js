import {
    AspectRatio,
    HStack,
    Text,
    Image,
    VStack,
    Heading,
    Center,
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Tooltip } from '@chakra-ui/react'

const AvatarArray = ({ userList, sizeBig = false }) => {
    const [size, setSize] = useState(4)
    useEffect(() => {
        if (sizeBig === true) setSize(20)
    }, [sizeBig])
    return (
        <VStack>
            <HStack spacing={-2} flexWrap={'wrap'} justifyContent={'Center'}>
                {userList ? (
                    userList.map((user, i) => {
                        if (i < size) {
                            return (
                                    <Avatar
                                        key={user.id}
                                        photo={user.profile_image}
                                        label={user.username}
                                    />
                            )
                        } else {
                            return null
                        }
                    })
                ) : (
                    <Text>None yet!</Text>
                )}
            </HStack>
            {userList && userList.length > size && (
                <Heading size='xs'> and {userList.length - size} more</Heading>
            )}
        </VStack>
    )
}

export default AvatarArray

const Avatar = ({ photo,label }) => {
    return (
        <AspectRatio ratio={1} w={10}>
            <Tooltip label={label} placement='top'>
                <Image
                    src={photo}
                    objectFit='cover'
                    borderRadius='15px'
                    border={'1px'}
                    borderColor={'gray500'}
                    p={'1px'}
                    fallbackSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm7iKDRSxqEpHVRB5FzOEVIg_ouNU10pQ8YGgVQhY7MqLSqmEQBXo_t5dfXi5ImExW6Y&usqp=CAU'
                />
            </Tooltip>
        </AspectRatio>
    )
}
