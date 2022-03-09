import axios from "axios"
import { getLocalToken, getPayload } from '../../enviroment/auth'

export const FollowingFollowerRequest = async (relatedUserId, user) => {
    const followingArray = user.following

    if (user.following.includes(relatedUserId)) {
        const index = followingArray.indexOf(relatedUserId)
        followingArray.splice(index, 1)
        console.log('remove')
    } else {
        console.log(relatedUserId)
        followingArray.push(relatedUserId)
        console.log('add')

    }
    console.log('Next', followingArray)
    let res = null
    try {
        const { data } = await axios.put(
            `/api/profile/${user.id}/`,
            { following: followingArray },
            {
                headers: {
                    Authorization: `Bearer ${getLocalToken()}`,
                },
            }
        )
        console.log(data)
        res = data
    } catch (err) {
        console.log(err)
    }
    return res
}
