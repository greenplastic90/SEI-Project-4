import React from "react"
import { VStack, Box, FormControl, Button, Textarea, Text } from '@chakra-ui/react'

const CommentForm = ({ handleSubmit, handleChange, formData, formErrors, setCommentForm }) => {
    const handleCancel = () => {
        setCommentForm(false)
    }
    return (
        <Box
            w={'100%'}
            onKeyPress={e => { e.key === 'Enter' && handleSubmit() }}
        >
            <VStack w="full" h="full" p={0} alignItems="stretch" flexDirection={'row'}>
                <VStack>
                    <FormControl my={2}>
                        <Textarea
                            onChange={handleChange}
                            name='text'
                            defaultValue={formData.text}
                            placeholder='Type comment here'
                        />
                        {formErrors === true && <Text fontSize={'small'} color={'red'}>{formErrors.text}</Text>}
                    </FormControl>
                </VStack>
                <VStack id="box" margin={0} justifyContent={'center'}>
                    <Button h={'100%'} size='sm' w='full' type='submit' onClick={handleSubmit}>
                        Sub
                    </Button>
                    <Button h={'100%'} size='sm' w='full' onClick={handleCancel}>
                        Can
                    </Button>
                </VStack>
            </VStack>
        </Box>
    )
}

export default CommentForm