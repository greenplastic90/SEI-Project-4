import React from "react"

// Components
import DeletePopover from './DeletePopover'
import EditCommentPopever from "./EditCommentPopover"

const CommentButtons = ({ id, setNewComment, comment, colour }) => {

    return (
        <>
            <EditCommentPopever colour={colour} setNewComment={setNewComment} comment={comment}/>
            <DeletePopover colour={colour} id={id} setNewComment={setNewComment} />
        </>
    )
}

export default CommentButtons
