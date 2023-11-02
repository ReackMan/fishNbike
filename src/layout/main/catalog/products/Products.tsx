import React from 'react';
import {ProductsHeader, StyledCards, StyledProducts} from "./StyledProducts";
import {Card} from "./card/Card";
import {useAppDispatch, useAppSelector} from "../../../../Redux/redux-store";
import {
    addOrderCreator,
    increaseAmountCreator,
} from "../../../../Redux/order-reducer";
import {ProductsItemType} from "../../../../Redux/products-reducer";

type ProductsPropsType = {
    choice: string
    productsItems: ProductsItemType[]
    theme: string
    products: any
    allProducts: ProductsItemType[]
    handleProductDetails: (id: string) => void
    handleOverflow: (isComponentOpen: boolean) => void
    productDetailsVisible: boolean
    isCartOpen: boolean
    toggleCart: (isCartOpen: boolean) => void
}

export const Products = (props: ProductsPropsType) => {

    const dispatch = useAppDispatch()
    const orderAmount = useAppSelector(state => state.order.orderAmount)

    // const getProductData = (id: string, item: ProductType) => {
    //     console.log(id)
    //     console.log(item)
    // }

    const addOrder = (id: string, productCount: number) => {
        let newOrderCount = props.allProducts.find(item => item.id === id)?.count
        let newOrder = props.allProducts.find(item => item.id === id)
        console.log(newOrderCount)
        dispatch(addOrderCreator(newOrder))
        //@ts-ignore
        let newPrice = newOrder?.amount + orderAmount
        dispatch(increaseAmountCreator(newPrice))
    }

    return (
        <StyledProducts productDetailsVisible={props.productDetailsVisible}>
            <ProductsHeader>
                <h2>{props.choice || 'Все'}</h2>
            </ProductsHeader>
            <StyledCards>
                {props.productsItems.map((product: ProductsItemType) => (
                    <Card product={product} addOrder={addOrder} theme={props.theme}
                          handleProductDetails={props.handleProductDetails}
                          handleOverflow={props.handleOverflow} choice={props.choice}
                          isCartOpen={props.isCartOpen} toggleCart={props.toggleCart}/>
                ))}
            </StyledCards>
        </StyledProducts>
    );
};

