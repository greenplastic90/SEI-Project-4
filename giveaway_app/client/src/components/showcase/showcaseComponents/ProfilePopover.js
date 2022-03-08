import React from "react"
import {  Button, Tag, ButtonGroup } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow
} from '@chakra-ui/react'

const ProfilePopover = ({ giveaway }) => {
    return (
        <>
            <Popover 
                closeOnEsc={true}
            >
                <PopoverTrigger>
                    <Button variant={'ghost'}><Tag alignSelf={'left'} variant={'solid'}>By: {giveaway.owner.username}</Tag></Button>
                </PopoverTrigger>
                <PopoverContent w={'fit-content'}>
                    <PopoverArrow />
                    <ButtonGroup size={'sm'}>
                        <Button colorScheme={'whatsapp'} w={'fit-content'}>Follow {giveaway.owner.username}</Button>
                        <Button colorScheme={'twitter'} w={'fit-content'}>Profile</Button>
                    </ButtonGroup>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default ProfilePopover