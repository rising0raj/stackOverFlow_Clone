import { VStack ,Image, Text,Button} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Card = ({amount,img,checkOutHandler}) => {
    const User=useSelector((state)=>(state.currentUserReducer))
    return (
    <div>
        <VStack>
            <Image src={img} boxSize={"80"} objectFit="cover"/>
            <Text>Rs {amount}/Month</Text>
            <Button onClick={()=>checkOutHandler(amount,User.result.email)}>Buy NOW</Button>
        </VStack>
    </div>
    )
}

export default Card
