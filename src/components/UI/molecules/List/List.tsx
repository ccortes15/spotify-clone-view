import { Stack, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { ListProps } from "../../../../global/interfaces";
import { colors } from "../../../../utils/colors";
import { Title } from "../../atoms";
import Card from "../Card/Card";

const List = (props: ListProps) => {
    return (
        <Stack direction='column' spacing='4'>
            <Flex pr='8'>
                <Box pt='4'>
                    <Title color={colors.white} text={props.title} size="lg" />
                </Box>
                <Spacer />
                <Box p='4'>
                    <Text as='b' fontSize='lg' color={colors.gray}>Mostrar todo</Text>
                </Box>
            </Flex>
            <Stack direction='row' spacing='8'>
                {props.list.map((item) => (
                    <Card src={item.src} alt={item.alt} header={item.header} desc={item.desc} />
                ))}
            </Stack>
        </Stack>
    )
}

export default List;