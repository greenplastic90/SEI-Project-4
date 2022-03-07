import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'

// Componenets
import CommentCard from './components/CommentCard'
import NewComment from './components/NewComment'

const CommentSection = ({ giveaway, setNewComment }) => {
    const [commentForm, setCommentForm] = useState(false)
    const handlenNewCommentButton  = () => {
        setCommentForm(true)
    }
    return (
        <>
            <h1>Comment section</h1>
            {!commentForm && <Button onClick={handlenNewCommentButton}>+</Button>}
            {commentForm && <NewComment setNewComment={setNewComment} setCommentForm={setCommentForm}/>}
            {giveaway.comments ? giveaway.comments.map(comment => (
                <CommentCard key={comment.id} comment={comment} />
            ))
                :
                null}
        </>
    )
}

export default CommentSection
