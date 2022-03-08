import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    FormControl,
    Textarea,
    PopoverHeader
} from '@chakra-ui/react'
import { FaEdit } from "@react-icons/all-files/fa/FaEdit"
import { getLocalToken } from '../../../enviroment/auth'
import { useDisclosure } from '@chakra-ui/react'

const EditCommentPopever = ({ comment, setNewComment, setIsEditForm }) => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const [formData, setFormData] = useState({
        text: ''
    })

    const [formErrors, setFormErrors] = useState({
        text: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(comment.id)
        try {
            await axios.put(
                `/api/giveaways/comments/${comment.id}/`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${getLocalToken()}`,
                    },
                }
            )
            setFormData({...formData, text: ''})
            setNewComment(true)
            setNewComment(false)
            setIsEditForm(false)
            console.log("Posted")
        } catch (err) {
            console.log(err)
            setFormErrors(err.response.data.errors)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setFormErrors({ ...formErrors, [e.target.name]: '' })
    }

    return (
        <>
        <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        closeOnBlur={false}
        closeOnEsc={true}
        >
            <PopoverTrigger>
                <Button size={'sm'}><FaEdit /></Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Edit</PopoverHeader>
                <FormControl>
                    <Textarea 
                    defaultValue={comment.text}
                    onChange={handleChange}
                    name={'text'}
                    />
                </FormControl>
                <Button onClick={handleSubmit} colorScheme='green'>Confirm</Button>
            </PopoverContent>
        </Popover>
    </>
    )
}

export default EditCommentPopever