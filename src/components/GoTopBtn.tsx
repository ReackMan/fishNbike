import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "./icon/Icon";

type GoTopBtnPropsType = {
    theme: string
}

export const GoTopBtn = (props: GoTopBtnPropsType) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <StyledGoTopBtn showGoTop={isVisible}>
            <button onClick={() => scrollUp()}>
                <span>
                    <Icon iconId={props.theme === 'light' ? 'goTopArrow4' : 'goTopArrow3'} width="45px" height="45px" viewBox="3 0 21 21"/>
                </span>
            </button>
        </StyledGoTopBtn>
    );
};

const StyledGoTopBtn = styled.div<{ showGoTop: boolean }>`
  
  button {
    display: ${ props => props.showGoTop === true ? 'block' : 'none'};
  }
  
  span {
    position: fixed;
    width: 40px;
    height: 50px;
    border-radius: 25px;
    bottom: 5%;
    right: 5%;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    
    &:hover {
      transform: scale(1.1);
    }
    
  }
  
`