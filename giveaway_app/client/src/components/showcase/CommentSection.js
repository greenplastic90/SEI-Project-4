import { Heading, Tag } from '@chakra-ui/react'
import React from 'react'

// Componenets
import CommentCard from './components/CommentCard'
import NewComment from './components/NewComment'

const CommentSection = ({ giveaway, setNewComment }) => {
    return (
        <>
            <Heading>Comment section</Heading>
            <NewComment setNewComment={setNewComment} />
            {giveaway.comments && giveaway.comments.length > 0 ? giveaway.comments.map(comment => (
                <CommentCard key={comment.id} comment={comment} setNewComment={setNewComment} />
            ))
                :
                <Tag colorScheme={'messenger'}>Be the first to comment!</Tag>
            }
        </>
    )
}

export default CommentSection
