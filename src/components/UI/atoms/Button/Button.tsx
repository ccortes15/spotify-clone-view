import { Text, Flex, Center } from '@chakra-ui/react'
import Icon from '../Icon/Icon';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { ButtonProps } from '../../../../global/interfaces';

const Button = (props: ButtonProps) => {
    return (
        <Flex
            bg={props.color}
            color={props.textColor}
            height='14'
            px='8'
            py='2'
            borderRadius='full'
            border={props.iconRequired ? '1px' : '0px'}
            borderColor={props.iconRequired ? props.textColor : props.color}
        >
            {props.iconRequired
                ?
                <Center w='35px' h='full'>
                    <Icon ico={faGlobe} size='1x' />
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