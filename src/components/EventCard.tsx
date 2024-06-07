import { Box, Heading, Image, Text } from '@chakra-ui/react'

import { useStore } from "../store"
import cover from '../assets/cover.avif'

export const EventCard = () => {
    const event = useStore(state => state.events[state.event])
    return (
        <>
            <Image src={cover} borderRadius="xl" mt={3} mb={6} />
            <Box pb={6}>
                <Heading as='h1' size='lg' mb={4}>{event.name}</Heading>
                <Text whiteSpace="pre-wrap">{event.description}</Text>
            </Box>
        </>
    )
}
