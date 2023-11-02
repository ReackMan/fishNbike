import React, {useEffect, useLayoutEffect, useRef} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {ProductsItemType,
    decreaseCountCreator,
    increaseCountCreator,} from "../../Redux/products-reducer";
import {
    decreaseAmountCreator,
    increaseAmountCreator,
} from "../../Redux/order-reducer";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";

type ProductCounterPropsType = {
    setProductCount?: (e: any) => void
    product?: ProductsItemType
    productCount: number
    choice: string
}

export const ProductCounter = (props: ProductCounterPropsType) => {

    const dispatch = useAppDispatch()
    const orderAmount = useAppSelector(state => state.order.orderAmount)




    const firstUpdate = useRef(true);


    let newOrder = {count: props.productCount}

    const incrementCounter = () => {
        debugger
        dispatch(increaseCountCreator(props.product, props.choice));
        // @ts-ignore
        dispatch(increaseAmountCreator(orderAmount + props.product?.amount))
    };

    const decrementCounter = () => {
        if (props.productCount !== 1) {
            dispatch(decreaseCountCreator(Object.assign(newOrder, props.product)));
            // @ts-ignore
            dispatch(increaseAmountCreator(orderAmount - props.product?.amount))
        }
    };

    return (
        <StyledProductCounter productCount={props.productCount} ref={firstUpdate}>
            <span onClick={decrementCounter}>
                <Icon iconId='minus' width='30px' height='30px' viewBox='3 0 18 18'/>
            </span>
            <input type="number" min={0} max={9999} step={1} size={4} maxLength={4}
                   value={props.productCount} disabled={true}/>
            <span onClick={incrementCounter}>
                <Icon iconId='plus' width='30px' height='30px' viewBox='3 0 18 18'/>
            </span>
        </StyledProductCounter>
    );
};

const StyledProductCounter = styled.div<{ productCount?: number, ref?: any }>`
  display: ${props => props.productCount != 0 ? 'flex' : 'none'};
  width: 80%;
  height: 45px;
  border: 1px solid #000;
  border-radius: 4px;
  
  span {
    width: 33%;
    text-align: center;
  }
  
  input {
    width: 33%;
    border: none;
    outline: none;
    text-align: center;
    font-size: 20px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`
