import React from "react";
import {StyledCardText} from "./StyledCardText";

type CardTextPropsType = {
    headerText: string
    amount: number
    theme: string
}

export const CardText = (props: CardTextPropsType) => {
    return (
        <StyledCardText theme={props.theme}>
            <h3>{props.headerText}</h3>
            <p>{props.amount + ' р.'}</p>
        </StyledCardText>
    )
}

