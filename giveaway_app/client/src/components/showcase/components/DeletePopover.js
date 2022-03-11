import React from "react"
import { FiDelete } from "@react-icons/all-files/fi/FiDelete"
import axios from "axios"
import { getLocalToken } from '../../../enviroment/auth'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button
} from '@chakra-ui/react'

const DeletePopover = ({ id, setNewComment, colour }) => {
    const handleDelete = async () => {
        try {
            const res = await axios.delete(
                `/api/giveaways/comments/${id}/`,
                {
                    headers: {
                        Authorization: `Bearer ${getLocalToken()}`,
                    }
                }
            )
            console.log(res.data)
            setNewComment(true)
            setNewComment(false)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <Button bgColor={colour} size={'sm'}><FiDelete /></Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>Are you sure you want to delete this comment?</PopoverBody>
                    <Button onClick={handleDelete} colorScheme='red'>Delete</Button>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default DeletePopover