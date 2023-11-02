import {Image, OrderDescription, StyledOrderItem} from "./StyledCart";
import {OrderCounter} from "./OrderCounter";
import {ToggleOrder} from "./ToggleCart";
import React, {Dispatch, SetStateAction} from "react";
import {ItemType} from "./Cart";

type OrderItemPropsType = {
    item: ItemType
    increaseAmount: (value: number) => void
    decreaseAmount: (value: number) => void
    deleteOrder: (id: string) => void
    orderCount: number
    setOrderCount: Dispatch<SetStateAction<number>>
}

export const OrderItem = (props: OrderItemPropsType) => {



    return (
        <StyledOrderItem>
            <Image src={props.item.imgSrc} alt="" height='70px'/>
            <OrderDescription>
                <h3>{props.item.headerText}</h3>
                <p>{props.item.itemDescription}</p>
            </OrderDescription>
            <OrderCounter item={props.item} increaseAmount={props.increaseAmount}
                          decreaseAmount={props.decreaseAmount} orderCount={props.item.count}
                          setOrderCount={props.setOrderCount}/>
            <ToggleOrder deleteOrder={props.deleteOrder} id={props.item.id}/>
        </StyledOrderItem>
    )

}
