import React from "react"

// Components
import DeletePopover from './DeletePopover'
import EditCommentPopever from "./EditCommentPopover"

const CommentButtons = ({ id, setNewComment, comment }) => {

    return (
        <>
            <EditCommentPopever setNewComment={setNewComment} comment={comment}/>
            <DeletePopover id={id} setNewComment={setNewComment} />
        </>
    )
}

export default CommentButtons
