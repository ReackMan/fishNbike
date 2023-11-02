import React, {useEffect, useState} from 'react';
import {
    StyledCart,
    StyledCartContent,
    CartHeader,
    CartOrder,
    CartAmount,
} from "./StyledCart";
import {ToggleCart} from "./ToggleCart";
import {Button} from "../Button";
import {
    decreaseAmountCreator,
    deleteOrderCreator,
    increaseAmountCreator,
    setOrderAmountCreator
} from "../../Redux/order-reducer";
import {OrderItem} from "./OrderItem";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";

type CartPropsType = {
    isCartOpen: boolean
    openCart: () => void
}

export type ItemType = { headerText: string; amount: number; imgSrc: string;
    itemDescription: string; id: string; count: number}


export const Cart = (props: CartPropsType) => {

    const [orderCount, setOrderCount] = useState(1)

    const dispatch = useAppDispatch()
    const orders = useAppSelector(state => state.order)
    const items = useAppSelector(state => state.order.orderItems)
    const orderAmount = useAppSelector(state => state.order.orderAmount)
    const initialAmount = items
        .map( (item) => item.amount)
        .reduce((sum, current) => sum + current, 0)

    useEffect(() => {
        dispatch(setOrderAmountCreator(initialAmount))
    }, []);
    const increaseAmount = (value: number) => {
        dispatch(increaseAmountCreator(orderAmount + value))
    }

    const decreaseAmount = (value: number) => {
       dispatch(decreaseAmountCreator(orderAmount - value))
    }


    const deleteOrder = (orderId: string) => {
        let orderItem = items.find(item => item.id === orderId)
        //@ts-ignore
        decreaseAmount(orderItem.amount * orderItem.count)
        dispatch(deleteOrderCreator(orderId))

        console.log(items)
    }


    return (
        <StyledCart isCartOpen={props.isCartOpen}>
            <StyledCartContent isCartOpen={props.isCartOpen}>
                <CartHeader>
                    <h2>Ваш заказ</h2>
                    <ToggleCart openCart={props.openCart}/>
                </CartHeader>
                <CartOrder>
                    {items.length === 0 ?
                        <div>Ваша корзина пуста</div>
                        :
                        items.map((item: ItemType) => (
                            <OrderItem item={item} increaseAmount={increaseAmount}
                                       decreaseAmount={decreaseAmount} deleteOrder={deleteOrder}
                                       orderCount={orderCount} setOrderCount={setOrderCount}/>
                        ))
                    }
                </CartOrder>
                <CartAmount>
                    <p>{'Сумма: ' + orderAmount + ' р.'}</p>
                </CartAmount>
                <Button width='100%' height='58px' bg='#000' color='#fff' alignSelf='end'>Заказать</Button>
            </StyledCartContent>
        </StyledCart>
    );
};

