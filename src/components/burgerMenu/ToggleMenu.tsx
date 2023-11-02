import {Bar, StyledBurgerButton} from "./StyledBurgerMenu";
import React, {memo} from "react";

export const ToggleMenu = memo( (props: any) => {


    return (
        <StyledBurgerButton ref={props.toggleRef} onClick={props.toggleBurgerMenu} id={'burger_btn'}>
            <Bar theme={props.theme} isMenuOpen={props.isMenuOpen} queue='1'/>
            <Bar theme={props.theme} isMenuOpen={props.isMenuOpen} queue='2'/>
            <Bar theme={props.theme} isMenuOpen={props.isMenuOpen} queue='3'/>
        </StyledBurgerButton>
    )
})