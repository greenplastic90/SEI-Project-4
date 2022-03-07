import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { getLocalToken } from '../../../enviroment/auth'
import CommentForm from './CommentForm'

const NewComment = ({ setNewComment, setCommentForm }) => {

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
        setFormData({...formData, giveaway: id})
    }, [id])


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
            setFormData({...formData, text: ''})
            setNewComment(true)
            setNewComment(false)
            setCommentForm(false)
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
            <div className='mt-4'>
                <CommentForm
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    formData={formData}
                    formErrors={formErrors}
                    setCommentForm={setCommentForm}
                />
            </div>
    )
}

export default NewComment