import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface ButtonProps {
    color: string,
    text: string,
    textColor: string,
    iconRequired?: boolean,
}

export interface ContainerProps {
    children: JSX.Element | JSX.Element[]
}

export interface IconProps {
    ico: IconDefinition,
    size: SizeProp
}

export interface IconButtonProps {
    ico: IconDefinition,
    arialabel: string,
}

export interface ImgProps {
    src: string,
    alt: string
}

export interface MenuItemProps {
    text: string,
    ico: IconDefinition
}

export interface TitleProps {
    color: string,
    text: string,
    size: string
}


export interface DetailsProps {
    src: string,
    alt: string,
    header: string,
    desc: string
}

export interface ListProps {
    title: string,
    list: DetailsProps[]
}