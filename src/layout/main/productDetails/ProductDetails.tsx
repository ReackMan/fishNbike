import React from 'react';
import styled from "styled-components";
import {ProductDetailsCarousel} from "./ProductDetailsCarousel";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ProductDetailsData} from "./ProductDetailsData";
import {Container} from "../../../components/Container";
import "./product.css"
import {addOrderCreator, increaseAmountCreator} from "../../../Redux/order-reducer";
import {useAppDispatch, useAppSelector} from "../../../Redux/redux-store";
import {ToggleCart} from "../../../components/cart/ToggleCart";
import {ProductsItemType} from "../../../Redux/products-reducer";

type ProductDetailsPropsType = {
    allProducts: ProductsItemType[]
    productDetailsVisible: boolean
    productId: string
    handleProductDetails: (id?: string) => void
}

export const ProductDetails = (props: ProductDetailsPropsType) => {
    const orderAmount = useAppSelector(state => state.order.orderAmount)
    const dispatch = useAppDispatch()
    let product = props.allProducts.find(item => item.id === props.productId)

    const addOrder = (productCount: number) => {
        let newOrder = {count: productCount}
        dispatch(addOrderCreator(Object.assign(newOrder, product)))
        //@ts-ignore
        let newPrice = newOrder?.amount + orderAmount
        dispatch(increaseAmountCreator(newPrice))
    }

    return (
        <StyledProductDetails productDetailsVisible={props.productDetailsVisible}>
            <Container>
                <ProductDetailsContent productDetailsVisible={props.productDetailsVisible}>
                    <FlexWrapper direction='column' gap='10px'>
                        <ToggleCart openCart={props.handleProductDetails}/>
                        <FlexWrapper gap='100px'>
                            {/* left column start */}
                            <ProductDetailsCarousel/>
                            {/* left column end */}

                            {/* right column start */}
                            <ProductDetailsData addOrder={addOrder} product={product}/>
                            {/* right column end */}
                        </FlexWrapper>
                    </FlexWrapper>
                </ProductDetailsContent>
            </Container>
        </StyledProductDetails>
    );
};

const StyledProductDetails = styled.div<{ productDetailsVisible: boolean }>`
  display: ${props => props.productDetailsVisible === false ? 'none' : 'block'};

  background-color: rgba(0, 0, 0, .3);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 9999;
  overflow-y: auto;

  transition: opacity 0.3s ease 0s;;
  opacity: ${props => props.productDetailsVisible === true ? 1 : 0};
  transform: translateX(${props => props.productDetailsVisible === true ? '0' : '100%'});

  width: 100%;
  height: 100%;
`

const ProductDetailsContent = styled.div<{ productDetailsVisible: boolean }>`
  display: ${props => props.productDetailsVisible === true ? 'block' : 'none'};
  position: fixed;

  margin: 0;
  max-width: 1193px;
  min-height: 450px;
  width: 100%;
  top: 80px;
  bottom: 80px;
  background-color: rgba(255, 255, 255, 1);
  padding: 40px;
  box-sizing: border-box;
  overflow: auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .2);
`
