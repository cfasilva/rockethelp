import { Text, VStack } from 'native-base'
import { useRoute } from '@react-navigation/native'

import { Header } from '../components/Header'

type RouteParams = {
    id: string
}

export function Details() {
    const route = useRoute()
    const { id } = route.params as RouteParams
    
    return (
        <VStack flex={1} bg="gray.700">
            <Header title="solicitação" />
            <Text color="white">
                {id}
            </Text>
        </VStack>   
    )
}