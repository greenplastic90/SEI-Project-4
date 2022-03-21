import React, { useEffect, useState } from "react"
import AvatarArray from "../../dashboard/components/sub-components/AvatarArray"
import { Button, Flex, Tag } from "@chakra-ui/react"
import { AiOutlineUserAdd } from '@react-icons/all-files/ai/AiOutlineUserAdd'
import { HiOutlineUserRemove } from '@react-icons/all-files/hi/HiOutlineUserRemove'
import axios from "axios"
import { getPayload } from "../../../enviroment/auth"
import { WatchListRequest } from "../../helpers/WatchListRequest"
import { userIsAuthenticated } from '../../../enviroment/auth'
const WatchListAvatars = ({ userlist, sizeBig, giveawayId, setIsGiveawayUpdate }) => {
    const [giveaway, setGiveway] = useState(null)
    const [user, setUser] = useState(null)
    const [isWatched, setIsWatched] = useState(false)
    const Payload = getPayload()
    useEffect(() => {
        const getGivewayList = async () => {
            try {
                const { data } = await axios.get(`/api/giveaways/update/${giveawayId}/`)
                setGiveway(data)
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        }
        getGivewayList()
    }, [giveawayId])

    useEffect(() => {
        const getUserList = async () => {
            try {
                const { data } = await axios.get(`/api/profile/related/${Payload.sub}/`)
                setUser(data)
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        }
        getUserList()
    }, [giveaway])

    useEffect(() => {
        if (!user) return
        if (user.watchlist.includes(giveawayId)) setIsWatched(true)
    }, [user])

    const handleWatchList = () => {
        WatchListRequest(giveawayId, user, giveaway)
        setTimeout(() => {
            setIsGiveawayUpdate(true)
            setIsGiveawayUpdate(false)
        }, 500)
        if (isWatched === true) {
            setIsWatched(false)
        } else {
            setIsWatched(true)
        }
    }

    return (
        <>
            <Flex px={1} border={'1px lightgray dashed'} w={'100%'} flexDirection='row' alignItems={'flex-start'}>
                <Tag textAlign={'center'} mr={1} ml={0} h={'40px'} variant={'outline'} colorScheme={'telegram'} fontSize={'sm'}>Watching?</Tag>
                <AvatarArray userList={userlist} sizeBig={sizeBig} />
            </Flex>
            {userIsAuthenticated() &&
                <>
                    {
                        isWatched ?
                            <Button h={'100%'} onClick={handleWatchList} alignSelf={'flex-end'} variant={'solid'} colorScheme={'red'} mb={1}><HiOutlineUserRemove /></Button>
                            :
                            <Button h={'100%'} onClick={handleWatchList} alignSelf={'flex-end'} variant={'solid'} colorScheme={'telegram'} mb={1}><AiOutlineUserAdd /></Button>
                    }
                </>
            }
        </>
    )
}

export default WatchListAvatars