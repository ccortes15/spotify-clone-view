import { Box, Center, Flex, Image, Spacer, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { colors } from "../../../../utils/colors";
import { Button, Title } from "../../atoms";
import { Menu } from "../../molecules";

const Nav = () => {
    const content = [
        'Legal',
        'Centro de privacidad',
        'Politica de Privacidad',
        'Cookies',
        'Sobre los anuncios',
        'Cookies'
    ]

    return (
        <Flex p='6' direction='column' h='full'>
            <Box>
                <Stack direction='row' align='center' marginBottom='6'>
                    <Box boxSize='50px'>
                        <Image
                            src='img/spotify-logo.png'
                            alt='Spotify'
                            fallbackSrc='https://via.placeholder.com/150'
                            rounded='full'
                        />
                    </Box>
                    <Box>
                        <Title color={colors.white} text={'Spotify'} size='2xl' />
                    </Box>
                </Stack>
                <Menu />
            </Box>
            <Spacer />
            <Stack direction='column' spacing={10} paddingBottom='4'>
                <Wrap>
                    {content.map((text) => (
                        <WrapItem>
                            <Center w='max-content'>
                                <Text fontSize='sm' textColor={colors.gray}>{text}</Text>
                            </Center>
                        </WrapItem>
                    ))}
                </Wrap>
                <Button color={colors.dark} text='Español de latinoamerica' textColor={colors.white} iconRequired />
            </Stack>
        </Flex>
    )
}

export default Nav;