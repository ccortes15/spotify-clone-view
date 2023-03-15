import { Center, Stack, Text } from "@chakra-ui/react";
import { MenuItemProps } from "../../../../global/interfaces";
import { colors } from "../../../../utils/colors";
import Icon from "../Icon/Icon";

const MenuItem = (props:MenuItemProps) => {
    return (
        <Stack direction='row' spacing='6' bg={colors.dark} align='center'>
            <Center w='40px' h='full' color={colors.gray}>
                <Icon ico={props.ico} size='2x' />
            </Center>
            <Center w='max-content' h='full' color={colors.gray}>
                <Text fontSize={'lg'} as='b'>{props.text}</Text>
            </Center>
        </Stack>
    )
}

export default MenuItem;