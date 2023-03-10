import { IconButton } from '@chakra-ui/react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'

const ButtonIcon = () => {
    return (
        <IconButton aria-label='Search database' icon={<Icon ico={faSearch}/>} />
    )
}

export default ButtonIcon;
