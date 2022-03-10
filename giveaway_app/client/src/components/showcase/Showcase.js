import React, { useState, useEffect } from 'react'
import { Text, HStack, VStack, Spinner, Divider } from '@chakra-ui/react'
import { useParams } from 'react-router'
import axios from 'axios'

// Componenets
import CommentSection from './CommentSection'
import GiveawayShowcase from './GiveawayShowcase'

const Showcase = () => {
    const { id } = useParams()
    const [giveaway, setGiveaway] = useState(null)
    const [isNewComment, setNewComment] = useState(false)
    const [isGiveawayUpdate, setIsGiveawayUpdate] = useState(null)
    useEffect(() => {
        console.log(id)
        const getGiveaway = async () => {
            try {
                const res = await axios.get(`/api/giveaways/${id}/`)
                // console.log(res)
                setGiveaway(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getGiveaway()
    }, [id, isNewComment, isGiveawayUpdate])

    return (
        <VStack w={'full'}>
            {giveaway ?
                <>
                    <GiveawayShowcase giveaway={giveaway} setIsGiveawayUpdate={setIsGiveawayUpdate} />
                    <Divider />
                    <CommentSection giveaway={giveaway} setNewComment={setNewComment} />
                </>
                :
                <Spinner
                    size='xl'
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                />
            }

        </VStack>
    )
}

export default Showcase
