import React from "react"
import AvatarArray from "../../dashboard/components/sub-components/AvatarArray"
import { Box, Tag, Text } from "@chakra-ui/react"
const WatchListAvatars = ({ userlist, sizeBig }) => {

    return (
        <Box border={'1px lightgray dashed'} w={'100%'}>
            <Tag textAlign={'center'} mb={1} variant={'outline'} colorScheme={'telegram'}>Whos's watching?</Tag>
            <AvatarArray userList={userlist} sizeBig={sizeBig}/>
        </Box>
    )
}

export default WatchListAvatars