import { Button, Heading, Tag } from '@chakra-ui/react'
import React from 'react'
import { VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
// Componenets
import CommentCard from './components/CommentCard'
import NewComment from './components/NewComment'
import { userIsAuthenticated } from '../../enviroment/auth'

const CommentSection = ({ giveaway, setNewComment }) => {
    const navigate = useNavigate()
    return (
        <VStack w={'full'} >
            {userIsAuthenticated() && <NewComment setNewComment={setNewComment} />}
            {giveaway.comments && giveaway.comments.length > 0 ? giveaway.comments.map(comment => (
                <CommentCard key={comment.id} comment={comment} setNewComment={setNewComment} />
            ))
                :
                <Tag colorScheme={'messenger'}>Be the first to comment!</Tag>
            }
            {giveaway.comments && giveaway.comments.length < 1 && !userIsAuthenticated() && <Button onClick={() => { navigate('/login') }} colorScheme={'messenger'}>Log In</Button>}
            {giveaway.comments && giveaway.comments.length > 0 && !userIsAuthenticated() && <Button onClick={() => { navigate('/login') }} colorScheme={'messenger'}>Log In to comment</Button>}
        </VStack>
    )
}

export default CommentSection
