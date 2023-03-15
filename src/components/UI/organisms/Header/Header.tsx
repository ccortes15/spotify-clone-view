import { Flex, Spacer, Stack, ButtonGroup } from "@chakra-ui/react";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../../utils/colors";
import { Button, IconButton } from "../../atoms";

const Header = () => {
    return (
        <Flex h='full' paddingX='6' align='center'>
            <Stack direction='row' spacing='6'>
                <IconButton ico={faLessThan} arialabel='Go Back' />
                <IconButton ico={faGreaterThan} arialabel='Go Next' />
            </Stack>
            <Spacer />
            <ButtonGroup spacing='4'>
                <Button textColor={colors.gray} color={colors.dark2} text='Registrate' />
                <Button textColor={colors.dark} color={colors.white} text='Iniciar sesión' />
            </ButtonGroup>
        </Flex>
    )
};

export default Header;