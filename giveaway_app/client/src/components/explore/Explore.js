import {
    Heading,
    Spinner,
    VStack,
    HStack,
    SimpleGrid,
    GridItem,
    useBreakpointValue,
    Box,
    Tag,
    Button,
    ButtonGroup,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

//components
import GiveawayCard from '../dashboard/components/sub-components/GiveawayCard'

const Explore = ({ categories, text, colour }) => {
    const [allGiveaways, setAllgiveaways] = useState([])
    const [filtedGiveaways, setFilterdGiveaways] = useState([])
    const [serachText, setSearchTex] = useState(null)
    const [isError, setIsError] = useState(false)
    const [plusCatergories, setPlusCategories] = useState([])
    const [selectedCatagory, setSelectedCatagory] = useState(null)
    const colSpan = useBreakpointValue([4, 4, 2])

    useEffect(() => {
        setSearchTex(text)
        console.log(text)
    }, [text])

    useEffect(() => {
        const addAll = [{ name: '', label: '-All-' }, ...categories]
        setPlusCategories(addAll)
    }, [categories])

    useEffect(() => {
        const getGiveaways = async () => {
            try {
                const res = await axios.get('api/giveaways/')
                setAllgiveaways(res.data)
                setFilterdGiveaways(res.data)
                console.log(res.data)
                setIsError(false)
            } catch (err) {
                console.log(err)
                setIsError(true)
            }
        }
        getGiveaways()
    }, [])

    useEffect(() => {
        let filterProcess = [...allGiveaways]

        if (!selectedCatagory && !serachText)
            return setFilterdGiveaways(allGiveaways)

        if (selectedCatagory && !serachText) {
            filterProcess = filterProcess.filter(
                (item) => item.category.name === selectedCatagory
            )
            setFilterdGiveaways(filterProcess)
        }

        if (!selectedCatagory && serachText) {
            filterProcess = filterProcess.filter((item) =>
                item.name.toLowerCase().includes(serachText.toLowerCase())
            )
            setFilterdGiveaways(filterProcess)
        }

        if (selectedCatagory && serachText) {
            filterProcess = filterProcess.filter(
                (item) => item.category.name === selectedCatagory
            )
            filterProcess = filterProcess.filter((item) =>
                item.name.toLowerCase().includes(serachText.toLowerCase())
            )
            setFilterdGiveaways(filterProcess)
        }
    }, [selectedCatagory, serachText, allGiveaways])

    const handelCatagoryDropdown = (e) => {
        const catagorySelected = e.name
        console.log(e.name)
        setSelectedCatagory(catagorySelected)
    }

    const handleButton = (e) => {
        const sortBy = e.target.value
        let listToSort = [...filtedGiveaways]
        if (sortBy === 'watched') {
            listToSort = listToSort.sort((a, b) => {
                return b.watcher_list.length - a.watcher_list.length
            })
            setFilterdGiveaways(listToSort)
        }
        if (sortBy === 'newest') {
            listToSort = listToSort.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at)
            })
            setFilterdGiveaways(listToSort)
        }
        if (sortBy === 'oldest') {
            listToSort = listToSort.sort((a, b) => {
                return new Date(a.created_at) - new Date(b.created_at)
            })
            setFilterdGiveaways(listToSort)
        }
        if (sortBy === 'endsSoon') {
            listToSort = listToSort.sort((a, b) => {
                // console.log(a.end_date - b.ends_date)
                return new Date(a.end_date) - new Date(b.end_date)
            })
            setFilterdGiveaways(listToSort)
        }
    }

    const colourStyles = {
        // control: () => ({ backgroundColor: "gray" })
        option: () => ({
            color: "black",
            cursor: 'pointer'
        })
    }


    return (
        <VStack w={'100%'}>
            <VStack
                boxShadow={'dark-lg'}
                px={[50, 100, 150]}
                py={2}
                borderRadius={30}
                border={'1px'}
                style={colourStyles}
            >
                <Heading>Search</Heading>
            </VStack>

            <HStack flexWrap={'wrap'} justifyContent={'centers'} flexDirection={'column'}>
                {/* <Box>
                    <FormLabel htmlFor='region'>Regions</FormLabel>
                    <Select
                        // onChange={handelRegionSelections}
                        id='regions'
                        name='regions'
                        options={regions}
                    />
                </Box> */}
                <Box id={'select'} w={'20rem'}>
                    {/* <FormLabel htmlFor='category'>Category</FormLabel> */}
                    <Select
                        onChange={handelCatagoryDropdown}
                        id='category'
                        name='category'
                        placeholder='Catagory'
                        options={plusCatergories}
                        styles={colourStyles}
                    ></Select>
                </Box>
                <HStack pt={3} pb={1}>
                    <Tag bgColor={colour} h={'100%'}>Arrange by:</Tag>
                    <ButtonGroup onClick={handleButton} flexWrap={'wrap'} justifyContent={'space-evenly'}>
                        <Button my={1} value={'endsSoon'}>Ends Soon</Button>
                        <Button my={1} value={'newest'}>Newest</Button>
                        <Button my={1} value={'oldest'}>Oldest</Button>
                        <Button my={1} value={'watched'}>Most Watched</Button>
                    </ButtonGroup>
                </HStack>
            </HStack>
            {/* Card output */}
            {allGiveaways ? (
                <HStack>
                    <SimpleGrid
                        columns={8}
                        w={'full'}
                        rowGap={5}
                        columnGap={5}
                        boxShadow={'dark-lg'}
                        p={3}
                        borderRadius={20}
                        border={'1px'}
                    >
                        {filtedGiveaways ? (
                            filtedGiveaways?.map((giveaway) => {
                                return (
                                    <GridItem
                                        key={giveaway.id}
                                        colSpan={colSpan}
                                    >
                                        <GiveawayCard giveaway={giveaway} />
                                    </GridItem>
                                )
                            })
                        ) : (
                            <Spinner />
                        )}
                    </SimpleGrid>
                </HStack>
            ) : (
                <Spinner />
            )}
        </VStack>
    )
}

export default Explore
