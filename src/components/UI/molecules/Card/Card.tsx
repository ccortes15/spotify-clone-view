import { Card as ChakraCard, CardBody, Stack, Text } from '@chakra-ui/react'
import { DetailsProps } from '../../../../global/interfaces';
import { colors } from '../../../../utils/colors';
import { Img, Title } from '../../atoms';

const Card = (props:DetailsProps) => {
    return(
        <ChakraCard width='250px' bg={'#1D1E1F'} >
            <CardBody>
                <Img src={props.src} alt={props.alt} />
                <Stack mt='6' spacing='3'>
                    <Title color={colors.white} text={props.header} size='md' />
                    <Text color={colors.gray} fontSize='lg' noOfLines={2}>
                        {props.desc}
                    </Text>
                </Stack>
            </CardBody>
        </ChakraCard>
    )
}

export default Card;