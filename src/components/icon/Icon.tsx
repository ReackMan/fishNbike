import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled from "styled-components";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    place?: string

}

export const Icon = (props: IconPropsType) => {
    return (
        <StyledIcon width={props.width || '97px'} height={props.height || '59px'} viewBox={props.viewBox || '0 0 97 59'}
             fill='none' place={props.place}>
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
        </StyledIcon>
    );
};

const StyledIcon = styled.svg<{ place?: string }>`
  border: ${props => props.place === 'counter' ? '1px' : '0'} solid #000;
  border-radius: ${props => props.place === 'counter' ? '50%' : '0'};
`
