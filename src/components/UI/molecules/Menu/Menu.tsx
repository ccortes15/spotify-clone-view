import { Container } from "../../atoms";
import MenuItem from "../../atoms/MenuItem/MenuItem";
import { faAdd, faBook, faHeart, faHomeAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Stack } from "@chakra-ui/react";


const Menu = () => {
    return (
        <Stack spacing={10}>
            <Container>
                <MenuItem text='Inicio' ico={faHomeAlt} />
                <MenuItem text='Buscar' ico={faSearch} />
                <MenuItem text='Tu biblioteca' ico={faBook} />
            </Container>
            <Container>
                <MenuItem text='Crear Playlist' ico={faAdd} />
                <MenuItem text='Tus me gusta' ico={faHeart} />
            </Container>
        </Stack>
    )
}

export default Menu;