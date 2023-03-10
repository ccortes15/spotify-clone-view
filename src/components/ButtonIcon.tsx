import { IconButton } from '@chakra-ui/react'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'

interface ButtonIconProps {
    ico: IconDefinition,
    arialabel: string,

}

const ButtonIcon = (props: ButtonIconProps) => {
    return (
        <IconButton
            aria-label={props.arialabel}
            icon={<Icon ico={props.ico} size='1x' />}
            borderRadius='full' 
            colorScheme='blackAlpha'
            color='gray'
        />
    )
}

export default ButtonIcon;
