import React from "react"
import { VStack, HStack, Box, FormControl, Button, Textarea, Text, Divider } from '@chakra-ui/react'
import { AiOutlineSend } from "@react-icons/all-files/ai/AiOutlineSend"

const CommentForm = ({ handleSubmit, handleChange, formData, formErrors, count }) => {

    return (
        <HStack w="full" h="full" p={0} justifyContent={'space-evenly'} onKeyPress={e => { e.key === 'Enter' && handleSubmit() }} id="box">
            <VStack w={'100%'}>
                <FormControl my={2} w={'100%'}>
                    <Textarea
                        onChange={handleChange}
                        name='text'
                        defaultValue={formData.text}
                        placeholder='Type comment here'
                    />
                    <HStack>
                    <Text fontSize={'small'}>{`${count}/200`}</Text>
                    {/* {count > 200 && <Text ontSize={'small'}>Comment too long</Text>} */}
                    {formErrors.text && <Text fontSize={'small'} color={'red'}>{formErrors.text}</Text>}
                    </HStack>
                </FormControl>
            </VStack>
            <VStack id="box" margin={0} h={'100%'}>
                <Button h={'100%'} size='sm' w='full' type='submit' onClick={handleSubmit}>
                    <AiOutlineSend />
                </Button>
            </VStack>
        </HStack>
    )
}

export default CommentForm