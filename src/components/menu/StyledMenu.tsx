import styled from "styled-components";
import {MenuPropsType} from "./Menu";
import {mainTheme} from "../../layout/styles/Theme";

export const StyledMenu = styled.nav<MenuPropsType>`
  order: 0;

  display: flex;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justContent || 'end'};
  
  
  grid-area: menu;
  @media screen and (max-width: ${props => 
          props.placeMenu === 'header' ? '768px' : ''}) {
    display: none;
  }
  
  @media screen and (max-width: 992px) {
    justify-content: ${props => props.placeMenu === 'footer' ? 'center' : ''};
    align-items: ${props => props.placeMenu === 'footer' ? 'center' : ''};
  }

  @media screen and (max-width: 576px) {
    justify-content: ${props => props.placeMenu === 'footer' ? 'start' : ''};
    align-items: ${props => props.placeMenu === 'footer' ? 'start' : ''};
  }
  
  
  flex-grow: ${props => props.flexGrow};

`

export const List = styled.ul<{ placeMenu?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  gap: 20px;
  
  @media screen and (max-width: 576px) {
    flex-direction: ${props => props.placeMenu === 'footer' ? 'column' : ''};
  }
`

export const Link = styled.a`
  text-align: center;

  /* Buttons / Big */
  font-family: DM Sans, sans-serif;
  font-size: 20px;
  font-weight: 500;
  //line-height: 26px; /* 130% */
  color: transparent;
`


export const Mask = styled.span<{ theme: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${props => 
          props.theme === 'light' ? mainTheme.colors.fontLight : mainTheme.colors.customText};;

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
      color: ${props =>
              props.theme === 'light' ? mainTheme.colors.fontLight : mainTheme.colors.customText};
    }
  }

`

export const ListItem = styled.li<{ theme: string }>`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 2px;
    background-color: ${props =>
            props.theme === 'light' ? mainTheme.colors.accentLight : mainTheme.colors.darkProjBg};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
    
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(4px);
      color: ${props => 
              props.theme === 'light' ? mainTheme.colors.fontLight : mainTheme.colors.customText};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-4px);
      }
    }


  }
`

