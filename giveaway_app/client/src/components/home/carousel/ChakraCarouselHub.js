import React, { useState, useEffect } from "react";
import { capsFirst } from "./utils";
import "fontsource-inter/500.css";

import {
    Container,
    Heading,
    Button,
    VStack,
    HStack,
    Text,
    Flex,
    Tag
} from "@chakra-ui/react";

import ChakraCarousel from "./ChakraCarousel";

const ChakraCarouselHub = ({ giveaways }) => {

    return (
        <Container
            py={2}
            px={0}
            maxW={{
                base: "100%",
                sm: "35rem",
                md: "43.75rem",
                lg: "57.5rem",
                xl: "75rem",
                xxl: "87.5rem"
            }}
        >
            <ChakraCarousel gap={32}>
                {giveaways && giveaways.map((post, index) => (
                    <Flex
                        key={post.id}
                        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                        justifyContent="space-between"
                        flexDirection="column"
                        overflow="hidden"
                        bg="base.d100"
                        rounded={5}
                        flex={1}
                        p={5}
                    >
                        <VStack mb={6} h={'150px'}>
                            <Heading
                                fontSize={{ base: "xl", md: "2xl" }}
                                textAlign="left"
                                w="full"
                                mb={2}
                            >
                                {capsFirst(post.name)}
                            </Heading>
                            <Text textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'wrap'} h={'150px'} textAlign={'justify'} w="full">{capsFirst(post.description)}</Text>
                        </VStack>

                        <Flex justifyContent="space-between">
                            <HStack spacing={2}>
                                <Tag size="sm" variant="outline" colorScheme="green">
                                    By: {post.owner.username}
                                </Tag>
                                <Tag size="sm" variant="outline" colorScheme="cyan">
                                    Ends: {post.end_date.slice(0, 10)}
                                </Tag>
                                <Tag size="sm" variant="outline" colorScheme="purple">
                                    {post.category.name}
                                </Tag>
                            </HStack>
                            <Button
                                onClick={() => alert(`Post ${post.id - 5} clicked`)}
                                colorScheme="green"
                                fontWeight="bold"
                                color="gray.900"
                                size="sm"
                            >
                                More
                            </Button>
                        </Flex>
                    </Flex>
                ))}
            </ChakraCarousel>
        </Container>
    );
}

export default ChakraCarouselHub