import React, { useEffect, useState } from "react"
import { Button, Tag, ButtonGroup } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow
} from '@chakra-ui/react'

import { FollowingFollowerRequest } from "../../helpers/FollowingFollowerRequest"
import { getPayload, userIsAuthenticated } from "../../../enviroment/auth"
import axios from "axios"


const ProfilePopover = ({ giveaway, colour }) => {
    const [isFollowed, setIsFollowed] = useState(false)
    const [user, setUser] = useState(null)
    const payload = getPayload()

    useEffect(() => {
        if (!userIsAuthenticated()) return
        const getUser = async () => {
            try {
                const res = await axios.get(`/api/profile/related/${payload.sub}/`)
                setUser(res.data)
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [])

    useEffect(() => {
        if (!giveaway) return
        if (!user) return
        console.log(user)
        if (user.following.includes(giveaway.owner.id)) {
            setIsFollowed(true)
        } else {
            setIsFollowed(false)
        }
    }, [giveaway, user])

    const handleFollow = async () => {
        FollowingFollowerRequest(giveaway.owner.id, user)
        if (isFollowed === true) return setIsFollowed(false)
        setIsFollowed(true)
    }

    return (
        <>
            <Popover
                closeOnEsc={true}
                preventOverflow={'false'}
                offset={0} 
                padding={0}
                flip={true}
            >
                <PopoverTrigger>
                    <Button variant={'ghost'}><Tag bgColor={colour} alignSelf={'left'} variant={'solid'}>By: {giveaway.owner.username}</Tag></Button>
                </PopoverTrigger>
                <PopoverContent w={'fit-content'}>
                    <PopoverArrow />
                    {userIsAuthenticated() && payload.sub !== giveaway.owner.id &&
                        <ButtonGroup size={'sm'}>
                            {isFollowed ?
                                <Button colorScheme={'red'} w={'fit-content'} onClick={handleFollow}>Unfollow {giveaway.owner.username}</Button>
                                :
                                <Button colorScheme={'whatsapp'} w={'fit-content'} onClick={handleFollow}>Follow {giveaway.owner.username}</Button>
                            }
                        </ButtonGroup>
                    }
                    <ButtonGroup size={'sm'}>
                        <Button colorScheme={'twitter'} w={'100%'}>Profile</Button>
                    </ButtonGroup>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default ProfilePopover