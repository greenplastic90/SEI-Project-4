import React from "react"
import { Button } from '@chakra-ui/react'
import { FaEdit } from "@react-icons/all-files/fa/FaEdit"
import { FiDelete } from "@react-icons/all-files/fi/FiDelete"

const CommentButtons = () => {


    return (
        <>
            <Button size={'sm'}><FaEdit /></Button>
            <Button size={'sm'}><FiDelete /></Button>
        </>
    )
}

export default CommentButtons
