import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProps } from '../../../../global/interfaces';

const Icon = (props: IconProps) => {
    return <FontAwesomeIcon icon={props.ico} size={props.size} />
}

export default Icon;