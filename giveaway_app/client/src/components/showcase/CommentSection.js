import { Heading, Tag } from '@chakra-ui/react'
import React from 'react'
import { VStack } from '@chakra-ui/react'

// Componenets
import CommentCard from './components/CommentCard'
import NewComment from './components/NewComment'

const CommentSection = ({ giveaway, setNewComment }) => {
    return (
        <VStack w={'full'} >
            {/* <Heading>Comment section</Heading> */}
            <NewComment setNewComment={setNewComment} />
            {giveaway.comments && giveaway.comments.length > 0 ? giveaway.comments.map(comment => (
                <CommentCard key={comment.id} comment={comment} setNewComment={setNewComment} />
            ))
                :
                <Tag colorScheme={'messenger'}>Be the first to comment!</Tag>
            }
        </VStack>
    )
}

export default CommentSection
