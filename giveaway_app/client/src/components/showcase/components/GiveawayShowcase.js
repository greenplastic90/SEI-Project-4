import React from "react"
import { VStack, HStack, Text, Heading, Image, Button, Box, Tag, Link } from '@chakra-ui/react'
import ProfilePhoto from "../../dashboard/components/sub-components/ProfilePhoto"
import { ExternalLinkIcon } from '@chakra-ui/icons'

const GiveawayShowcase = ({ giveaway }) => {


    return (
        <>
            <VStack>
                <Heading alignSelf={'flex-start'}> {giveaway.name}</Heading>
                <HStack w={'full'} alignItems={'flex-start'}>
                    <VStack>
                        <Image src={giveaway.giveaway_images[0]} alt={'Giveaway'} />
                    </VStack>
                    <VStack>
                        <ProfilePhoto photo={giveaway.owner.profile_photo} />
                        <Tag variant={'solid'}>By: {giveaway.owner.username}</Tag>
                        <Button>Follow</Button>
                        <Box border={'1px black solid'} w={'100%'}>
                            <Text>Watching list</Text>
                        </Box>
                    </VStack>
                </HStack>
                <VStack>
                    <Heading alignSelf={'flex-start'} size={'md'}>Description</Heading>
                    <Text textAlign={'justify'} >{giveaway.description}</Text>
                    <HStack>
                        <Link href={giveaway.giveaway_link} isExternal alignSelf={'flex-start'}>
                            <Tag size={'lg'} colorScheme={'facebook'}>Go to Giveaway: <ExternalLinkIcon mx='2px' /></Tag>
                        </Link>
                        <Tag colorScheme={'red'} size={'lg'}>{giveaway.end_date}</Tag>

                    </HStack>

                </VStack>
            </VStack >
        </>

    )
}

export default GiveawayShowcase