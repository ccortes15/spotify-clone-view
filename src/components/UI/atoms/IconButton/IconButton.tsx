import { IconButton as ICButton } from '@chakra-ui/react'
import { IconButtonProps } from '../../../../global/interfaces'
import { colors } from '../../../../utils/colors'
import Icon from '../Icon/Icon'

const IconButton = (props: IconButtonProps) => {
    return (
        <ICButton
            aria-label={props.arialabel}
            icon={<Icon ico={props.ico} size='1x' />}
            borderRadius='full' 
            colorScheme={colors.blackAlpha}
            color={colors.gray}
        />
    )
}

export default IconButton;
