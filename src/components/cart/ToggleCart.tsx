import React, {memo} from "react";
import {StyledCartButton, StyledOrderButton} from "./StyledCart";
import {Icon} from "../icon/Icon";

type ToggleCartPropsType = {
    openCart: () => void
}

export const ToggleCart = memo((props: ToggleCartPropsType) => {


    return (
        <StyledCartButton onClick={props.openCart}>
            <Icon iconId='cross' width='22px' height='22px' viewBox='0 0 22 22'/>
        </StyledCartButton>
    )
})

type ToggleOrderPropsType = {
    deleteOrder: (id: string) => void
    id: string
}

export const ToggleOrder = memo((props: ToggleOrderPropsType) => {

    const handleClick = () => {
        props.deleteOrder(props.id)
    }

    return (
        <StyledOrderButton onClick={handleClick}>
            <Icon iconId='cross' width='20px' height='20px' viewBox='-11 -10 45 45' place='counter'/>
        </StyledOrderButton>
    )
})