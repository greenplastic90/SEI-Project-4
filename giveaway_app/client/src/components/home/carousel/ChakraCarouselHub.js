import React from 'react'
import { capsFirst } from './utils'
import 'fontsource-inter/500.css'
import { Link } from 'react-router-dom'

import {
    Container,
    Heading,
    VStack,
    HStack,
    Text,
    Flex,
    Tag,
    Image,
    Box,
    Spinner,
} from '@chakra-ui/react'

import ChakraCarousel from './ChakraCarousel'

const ChakraCarouselHub = ({ giveaways }) => {
    return (
            <ChakraCarousel gap={32} id='chackra-card'>
                {giveaways ?
                    giveaways.map((post) => (
                        <Box
                            display={'flex'}
                            boxSizing={'border-box'}
                            key={post.id}
                            boxShadow='rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
                            justifyContent='space-between'
                            flexDirection='column'
                            overflow='hidden'
                            bg='base.d100'
                            rounded={5}
                            flex={1}
                            p={5}
                            _hover={{
                                border: '1px solid'
                            }}
                        >
                            <Link to={`giveaway/${post.id}`}>
                                <Flex flexDirection={'column'} mb={2}>
                                    <VStack mb={2} h={'200px'}>
                                        <Heading
                                            fontSize={{ base: 'xl', md: '2xl' }}
                                            textAlign='left'
                                            w='full'
                                            mb={2}
                                        >
                                            {capsFirst(post.name)}
                                        </Heading>
                                        <Text
                                            textOverflow={'ellipsis'}
                                            overflow={'hidden'}
                                            whiteSpace={'wrap'}
                                            h={'150px'}
                                            textAlign={'justify'}
                                            w='full'
                                        >
                                            {capsFirst(post.description)}
                                        </Text>
                                    </VStack>
                                    <VStack maxH={'350px'}>
                                        {post.giveaway_images ? (
                                            <Image
                                                src={post.giveaway_images[0]}
                                                alt='Giveaway'
                                                fallback='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
                                            />
                                        ) : (
                                            <Image
                                                src={
                                                    'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
                                                }
                                                alt='Giveaway'
                                            />
                                        )}
                                    </VStack>
                                </Flex>
                            </Link>
                            <Flex justifyContent='space-between'>
                                <HStack spacing={2}>
                                    <Link to={'/'}>
                                        <Tag
                                            size='sm'
                                            variant='outline'
                                            colorScheme='green'
                                            _hover={{
                                                background: 'lightgreen',
                                                transform: 'scale(105%)',
                                            }}
                                        >
                                            By: {post.owner.username}
                                        </Tag>
                                    </Link>
                                    <Link to={'/'}>
                                        <Tag
                                            size='sm'
                                            variant='outline'
                                            colorScheme='purple'
                                            _hover={{
                                                background: '#b89eff',
                                                transform: 'scale(105%)',
                                            }}
                                        >
                                            {post.category.name}
                                        </Tag>
                                    </Link>
                                    <Tag
                                        size='sm'
                                        variant='outline'
                                        colorScheme='cyan'
                                    >
                                        Ends: {post.end_date.slice(0, 10)}
                                    </Tag>
                                </HStack>
                            </Flex>
                        </Box>
                    ))
                    :
                    <Spinner />
                }
            </ChakraCarousel>
    )
}

export default ChakraCarouselHub
