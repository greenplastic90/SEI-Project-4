import axios from "axios"
import React, { useState, useEffect } from "react"

import { getLocalToken, getPayload } from '../../../enviroment/auth'

const FollowingFollowerRequest = ({ relatedUserId, user }) => {
    const [userForm, setUserForm] = useState(null)
    const [relatedUserForm, setRelatedUserForm] = useState(null)

    useEffect(() => {
        if (userForm && relatedUserForm){
            if (userForm.includes(relatedUserId)) {
                // If array includes realted id >>> remove there ID
                // And Vice versa
            } else {
                // If its not in the array, add there id. 
                // and vice versa
            }
        }

    }, [userForm, relatedUserForm])

    useEffect(() => {
        setUserForm(user.following)
    }, [user])

    // Get verifired User 
    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await axios.get(`/api/profile/${relatedUserId}/`)
                setRelatedUserForm(data.followers)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [relatedUserId])

    const updatedUserLists = async () => {
        const payload = getPayload()
        const id = payload.sub
        try {
            // Update User
            await axios.put(
                `/api/profile/${id}/`,
                userForm, // Change to object with altered array as value
                {
                    headers: {
                        Authorization: `Bearer ${getLocalToken()}`,
                    },
                }
            )
            // Update realted User
            await axios.put(
                `/api/profile/related/${relatedUserId}/`,
                relatedUserForm, // Change to object with altered array as value
                {
                    headers: {
                        Authorization: `Bearer ${getLocalToken()}`,
                    },
                }
            )
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        </>
    )
}

export default FollowingFollowerRequest