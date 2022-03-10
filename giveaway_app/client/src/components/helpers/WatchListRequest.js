import axios from "axios"
import { getLocalToken } from '../../enviroment/auth'

export const WatchListRequest = async (giveawayid, user, giveaway, ) => {
    const watchArray = user.watchlist
    console.log('watchArray', watchArray)
    const watcherArray = giveaway.watcher_list
    console.log('watcherArray', watcherArray)
    console.log(giveawayid)
    console.log(watchArray.includes(giveawayid))
    if (watchArray.includes(giveawayid)) {
        const index = watchArray.indexOf(giveawayid)
        watchArray.splice(index, 1)

        const userindex = watcherArray.indexOf(user.id)
        watcherArray.splice(userindex, 1)
        console.log('remove')
    } else {
        watchArray.push(giveawayid)
        watcherArray.push(user.id)
        console.log('add')

    }

    console.log('Next', watchArray)
    console.log('Last', watcherArray)
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
