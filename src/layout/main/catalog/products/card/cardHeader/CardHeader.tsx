import React from "react";
import {StyledCardHeader} from "./StyledCardHeader";

type HeaderPropsType = {
    imgSrc: string
    imgAlt: string
    id: string
}

export const CardHeader = (props: HeaderPropsType) => {
    return <StyledCardHeader id={props.id}>
        <img src={props.imgSrc} alt="image card"/>
    </StyledCardHeader>
}

