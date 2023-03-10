import { Text, Flex, Center } from '@chakra-ui/react'
import Icon from './Icon';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


interface ButtonProps {
    color: string,
    text: string,
    textColor: string,
    iconRequired?: boolean,
}

const Button = (props: ButtonProps) => {

    return (
        <Flex 
            bg={props.color} 
            color={props.textColor} 
            px='6' 
            py='2' 
            borderRadius='15' 
            border={props.iconRequired ? '1px' : '0px'} 
            borderColor={props.iconRequired ? props.textColor : props.color}
        >
            {props.iconRequired 
            ?
                <Center w='35px' h='full'>
                    <Icon ico={faGlobe} />
                </Center> 
            : null
            }
            <Center w='150px' h='full'>
                <Text align='center' as='b'>{props.text}</Text>
            </Center>
        </Flex>

    )
}

export default Button;