import React, {useEffect, useRef, useState} from "react";
import SocialNetworks from "../../components/socialNetworks/SocialNetworks";
import {Menu} from "../../components/menu/Menu";
import {StyledCartIcon, StyledHeader} from './StyledHeader';
import {ToggleBtn} from "../../components/ToggleTheme";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {BurgerMenu} from "../../components/burgerMenu/BurgerMenu";
import {ToggleMenu} from "../../components/burgerMenu/ToggleMenu";
import {useBurgerMenu, useOnClickOutside} from "../../components/burgerMenu/useBurgerMenu";
import {useWindowDimensions} from "../../components/useWindowDimensions";
import logo from "../../assets/images/logo.png"
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {Cart} from "../../components/cart/Cart";


type HeaderPropsType = {
    handleOverflow: (isCartOpen: boolean) => void
    theme: string
    themeToggle: () => void
    isCartOpen: boolean
    toggleCart: (isCartOpen: boolean) => void
}

export const Header = (props: HeaderPropsType) => {
    const [isMenuOpen, toggleBurgerMenu] = useBurgerMenu()
    const {widthInner, heightInner} = useWindowDimensions()


    const openCart = () => {
        props.toggleCart(!props.isCartOpen)
        props.handleOverflow(!props.isCartOpen)
    }

    const menuRef = useRef()
    const toggleRef = useRef()




    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth > 768 && isMenuOpen) {
                toggleBurgerMenu()
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useOnClickOutside([toggleRef,menuRef], () => {

        if (isMenuOpen) {
            toggleBurgerMenu();
        }
    });

    return (
        <StyledHeader theme={props.theme}>
            <Container>
                <FlexWrapper justCont='space-between'>
                    <a href='/'><Image src={logo} alt="Логотип"/></a>
                    <Menu theme={props.theme} placeMenu='header' flexGrow='3'/>
                    <ToggleMenu toggleRef={toggleRef} toggleBurgerMenu={toggleBurgerMenu} theme={props.theme}
                                isMenuOpen={isMenuOpen}/>
                    <BurgerMenu menuRef={menuRef} theme={props.theme} isMenuOpen={isMenuOpen}
                                themeToggle={props.themeToggle}/>
                    <ToggleBtn theme={props.theme} placeBtn='header' themeToggle={props.themeToggle}/>
                    <SocialNetworks theme={props.theme} padding='20px' placeSocials='header'/>
                    <StyledCartIcon onClick={openCart}>
                        <Icon iconId='cart' width='50px' height='50px' viewBox='0 -5 25 28'/>
                    </StyledCartIcon>
                    <Cart isCartOpen={props.isCartOpen} openCart={openCart}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const Image = styled.img`
  width: 100px;
  height: 72px;
`

