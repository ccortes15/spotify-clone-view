import { Stack } from "@chakra-ui/react"
import { ContainerProps } from "../../../../global/interfaces";

const Container = (props:ContainerProps) => {
    return (
        <Stack direction='column' spacing={4} >
            {props.children}
        </Stack >
    )
}

export default Container;