import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Paymentsuccess = () => {
    const search =useSearchParams()[0]

    const refernceNo =search.get("reference")
    alert("LOGOUT and then LOGIN again to see your membership")
    return (

    <div>
        <Box>
            <VStack h="100vh" justifyContent={"center"}>
                <Heading textTransform={"uppercare"}>
                    Order Successfull
                </Heading>
                    <Text>
                        Reference No. - {refernceNo}
                    </Text>
            </VStack>
        </Box>
    </div>
    )
}

export default Paymentsuccess
