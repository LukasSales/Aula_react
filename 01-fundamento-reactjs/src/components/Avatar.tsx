import { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.css'


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    /*src?: string;
    alt?: string; não precisa colocar pois ja existe na ImgHTMLAttributes*/
}

export function Avatar({hasBorder = true, ...props}: AvatarProps) {
/* 
const hasBorder = props.hasBorder != false;
forma de usar a logica, se hasBorder for 1 ele mostra o avatar com borda, se for 0, mostra sem borda. Pra ser 1 props.hasBorder tem que ser diferente de 0*/

    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            /*src={src}
            alt={alt} em vez de usar assim, pode ser feito da seguinte froma */
            {...props}
        />
    );
}