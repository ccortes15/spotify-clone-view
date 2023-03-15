import { Image } from "@chakra-ui/react";
import { ImgProps } from "../../../../global/interfaces";

const Img = (props:ImgProps) => {
    return (
        <Image
            boxSize={'max-content'}
            objectFit='cover'
            src={props.src}
            alt={props.alt}
            borderRadius='lg'
        />
    )
}

export default Img;