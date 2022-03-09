import axios from "axios"
import { getLocalToken } from '../../enviroment/auth'

export const WatchListRequest = async (giveawayid, user, giveaway) => {
    const watchArray = user.watchlist
    const watcherArray = giveaway.watcher_list
    console.log(giveawayid)
    if (user.following.includes(giveawayid)) {
        const index = watchArray.indexOf(giveawayid)
        watchArray.splice(index, 1)

        const userindex = watcherArray.index(user.id)
        watcherArray.splice(userindex, 1)
        console.log('remove')
    } else {
        watchArray.push(giveawayid)
        watcherArray.push(user)
        console.log('add')

    }

    console.log('Next', watchArray)

    try {
        const { data } = await axios.put(
            `/api/profile/${user.id}/`,
            { watchlist: watchArray },
            {
                headers: {
                    Authorization: `Bearer ${getLocalToken()}`,
                },
            }
        )
        console.log('User res', data)
    } catch (err) {
        console.log(err)
    }

    try {
        const { data } = await axios.put(
            `/api/giveaways/update/${giveaway.id}/`,
            { watcher_list: watcherArray },
            {
                headers: {
                    Authorization: `Bearer ${getLocalToken()}`,
                },
            }
        )
        console.log('Giveaway res', data)
    } catch (err) {
        console.log(err)
    }
}
