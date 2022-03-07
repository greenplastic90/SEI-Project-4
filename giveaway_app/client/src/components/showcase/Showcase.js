import React, { useState, useEffect } from 'react'
import { Text, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router'
import axios from 'axios'

// Componenets
import CommentSection from './CommentSection'

const Showcase = () => {
    const { id } = useParams()
    console.log(id)
    const [giveaway, setGiveaway] = useState({})

    useEffect(() => {
        const getGiveaway = async () => {
            try {
                const res = await axios.get(`api/giveaways/${id}`)
                console.log(res)
                setGiveaway(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getGiveaway()
    }, [id])

    return (
        <>
            <VStack>
                <Text>Showcase</Text>
            </VStack>
            <VStack>
                <CommentSection giveaway={giveaway}/>
            </VStack>
        </>
    )
}

export default Showcase
