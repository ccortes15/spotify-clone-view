import { Grid, GridItem } from '@chakra-ui/react'
import { colors } from '../../utils/colors';
import { Header, Main, Nav } from '../../components/UI/organisms';
import { useUserWindow } from '../../hooks/useUserWindow';

const Home = () => {
    const screenSize = useUserWindow();

    return (
        <Grid
            templateAreas={`"nav header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={'6% 1fr 10%'}
            gridTemplateColumns={'350px 1fr'}
            h={screenSize.dynamicHeight}
        >
            <GridItem bg={colors.dark2} area={'header'}>
                <Header />
            </GridItem>
            <GridItem bg={colors.dark} area={'nav'}>
                <Nav />
            </GridItem>
            <GridItem bg={colors.dark3} area={'main'}>
                <Main />
            </GridItem>
            <GridItem pl='2' bg={colors.dark3} area={'footer'}>
                Footer
            </GridItem>
        </Grid>
    )
}

export default Home;