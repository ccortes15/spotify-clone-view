import { Stack } from "@chakra-ui/react";
import { songsList } from "../../../../data/songsList";
import { List } from "../../molecules";


const Main = () => {
    return(
        <Stack h='full' pt='8' pl='8' direction='column'>
            <List title='Enfoque' list={songsList} />
            <List title='Spotify Playlists' list={songsList} />
        </Stack>
    )
}

export default Main;