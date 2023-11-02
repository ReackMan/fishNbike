import styled from "styled-components";
import {mainTheme} from "../../layout/styles/Theme";

type StyledBurgerMenuPropsType = {
    justContent?: string
    theme: string
    isMenuOpen?: boolean
    menuRef?: any
}

export const StyledBurgerMenu = styled.nav<StyledBurgerMenuPropsType>`
  order: 0;

  display: ${props => props.isMenuOpen === false ? 'none' : 'flex'};
  align-items: end;
  //justify-content: ${props => props.justContent || 'end'};
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 79px;
  right: 0;
  width: 150px;
  background-color: ${props => props.theme === 'light'
          ? '#D7FFE0' : mainTheme.colors.accentLight};
  padding: 15px 0;
  box-shadow: inset 0 5px 15px 0 rgba(0, 0, 0, 0.20);
  

`

export const StyledBurgerButton = styled.button`
  display: none;
  transform-origin: 16px 11px;
  float: left;
  margin-right: 29px;
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :focus {
    border: medium none rgb(111, 255, 176);
    box-shadow: rgb(111, 255, 176) 0 0 2px 2px;
    outline: 0;
  }

  :hover {
    span:nth-of-type(1) {
      width: 33px;
    }

    span:nth-of-type(2) {
      width: 40px;
    }

    span:nth-of-type(3) {
      width: 30px;
    }
  }

  
  
  @media screen and (max-width: 768px) {
    display: block;
    
  }
  
  @media screen and (hover: hover) {
    span:nth-of-type(1) {
      width: 33px;
    }

    span:nth-of-type(2) {
      width: 40px;
    }

    span:nth-of-type(3) {
      width: 30px;
    }
  }
`

export const Bar = styled.span<{ theme: string, isMenuOpen: boolean, queue: string }>`
  display: block;
  width: 40px;
  height: 5px;
  margin-bottom: 7px;
  background-color: ${props => props.theme === 'light'
          ? mainTheme.colors.accentLight : mainTheme.colors.accentDark};


  transform: ${props => (props.isMenuOpen === true) && (props.queue === '1')
          ? 'rotate(45deg) translate(10px, 10px)' : ''};
  opacity: ${props => (props.isMenuOpen === true) && (props.queue === '2')
          ? '0' : '1'};
  pointer-events: ${props => (props.isMenuOpen === true) && (props.queue === '2')
          ? 'none' : ''};
  transform: ${props => (props.isMenuOpen === true) && (props.queue === '3')
          ? 'rotate(-45deg) translate(7px, -7px)' : ''};

  

`;


export const List = styled.ul`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  align-items: end;
  margin: 0;
  padding: 0;
  gap: 20px;
`

export const Link = styled.a`
  text-align: center;

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

