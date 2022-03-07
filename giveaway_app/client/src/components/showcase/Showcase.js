import React, { useState, useEffect } from 'react'
import { Text, HStack, Container } from '@chakra-ui/react'
import { useParams } from 'react-router'
import axios from 'axios'

// Componenets
import CommentSection from './CommentSection'

const Showcase = () => {
    const { id } = useParams()
    const [giveaway, setGiveaway] = useState({})
    const [isNewComment, setNewComment] = useState(false)

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
    }, [id, isNewComment])

    return (
        <Container maxW="container.xl" padding={0}>
            <HStack>
                <Text>Showcase</Text>
            </HStack>
            <HStack flexDirection={'column'}>
                <CommentSection giveaway={giveaway} setNewComment={setNewComment}/>
            </HStack>
        </Container>
    )
}

export default Showcase
