import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IconProps {
    ico: IconDefinition
}

const Icon = (props: IconProps) => {
    return (
        <FontAwesomeIcon icon={props.ico} />
    )
}

export default Icon;