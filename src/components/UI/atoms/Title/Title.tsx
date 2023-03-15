import { Heading } from '@chakra-ui/react'
import { TitleProps } from '../../../../global/interfaces';

const Title = (props: TitleProps) => {
    return (
        <Heading size={props.size} color={props.color}>{props.text}</Heading>
    )
}

export default Title;