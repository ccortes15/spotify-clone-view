import { Center, Stack, Text } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

interface MenuItemProps {
    text: string,
    ico: IconDefinition
}

const MenuItem = (props:MenuItemProps) => {
    return (
        <Stack direction='row' spacing='6' bg='black' align='center'>
            <Center w='40px' h='full' color='gray'>
                <Icon ico={props.ico} size='2x' />
            </Center>
            <Center w='max-content' h='full' color='gray'>
                <Text fontSize={'lg'} as='b'>{props.text}</Text>
            </Center>
        </Stack>
    )
}

export default MenuItem;