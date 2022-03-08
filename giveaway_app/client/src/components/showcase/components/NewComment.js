import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { getLocalToken } from '../../../enviroment/auth'
import CommentForm from './CommentForm'

const NewComment = ({ setNewComment }) => {

    const { id } = useParams()
    const [formData, setFormData] = useState({
        text: '',
        giveaway: ''
    })

    const [formErrors, setFormErrors] = useState({
        text: '',
        giveaway: ''
    })
    useEffect(() => {
        setFormData({ ...formData, giveaway: id })
    }, [id])
    const [count, setCount] = useState(0)


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(
                `/api/giveaways/comments/`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${getLocalToken()}`,
                    },
                }
            )
            setFormData({ ...formData, text: '' })
            setNewComment(true)
            setNewComment(false)
            console.log("Posted")
        } catch (err) {
            console.log(err.response.data.detail.text[0])
            setFormErrors({...formErrors, text: err.response.data.detail.text[0]})
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setFormErrors({ ...formErrors, [e.target.name]: '' })
        setCount(e.target.value.length)
    }

    return (
        <CommentForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
            formErrors={formErrors}
            count={count}
        />
    )
}

export default NewComment