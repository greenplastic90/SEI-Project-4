import React from 'react'

// Componenets
import CommentCard from './components/CommentCard'

const CommentSection = ({ giveaway }) => {
    return (
        <>
            <h1>Comment section</h1>
            {giveaway.comments.length > 0 ? giveaway.comments.map(comment => (
                <CommentCard key={comment.id} comment={comment}/>
            ))
        :
        null}
        </>
    )
}

export default CommentSection
