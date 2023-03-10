import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IconProps {
    ico: IconDefinition,
    size: SizeProp
}

const Icon = (props: IconProps) => {
    return (
        <FontAwesomeIcon icon={props.ico} size={props.size} />
    )
}

export default Icon;