import {CardHeader} from "./cardHeader/CardHeader";
import {CardText} from "./cardText/CardText";
import React, {useRef, useState} from "react";
import {StyledCard} from "./StyledCard";
import {BtnBox, Button} from "../../../../../components/Button";
import {ProductCounter} from "../../../../../components/productCounter/ProductCounter";
import {useAppSelector} from "../../../../../Redux/redux-store";
import {ProductsItemType} from "../../../../../Redux/products-reducer";
import {Icon} from "../../../../../components/icon/Icon";


type CardPropsType = {
    theme: string
    product: ProductsItemType
    addOrder: (id: string, productCount: number) => void
    handleProductDetails: (id: string) => void
    handleOverflow: (isComponentOpen: boolean) => void
    isCartOpen: boolean
    toggleCart: (isCartOpen: boolean) => void
    choice: string

}

export const Card = (props: CardPropsType) => {

    const cardRef = useRef()
    // console.log(cardRef)
    debugger
    const openProductDetails = () => {
        props.handleProductDetails(props.product.id)
    }

    const toCart = () => {
        debugger
        props.addOrder(props.product.id, 1)
    }

    const openCart = () => {
        props.toggleCart(!props.isCartOpen)
        props.handleOverflow(!props.isCartOpen)
    }
    return (
        <StyledCard theme={props.theme} ref={cardRef}>
            <CardHeader imgSrc={props.product.imgSrc} imgAlt="image card" id={props.product.id}/>
            <CardText headerText={props.product.headerText} theme={props.theme}
                      amount={props.product.amount}/>
            <BtnBox marginRight='15px' marginLeft='15px' width='100%' maxWidth='260px'>
                <Button width='100%' bg='#000000' color='#ffffff'
                        onClick={openProductDetails}>Подробнее о товаре</Button>
                <ProductCounter product={props.product} productCount={props.product.count} choice={props.choice}/>
                <Button width='100%' bg='#074d4a' onClick={toCart}
                        visible={props.product.count != 0 ? 'none' : 'flex'}>В корзину</Button>
                <Button width='15%' bg='#074d4a' onClick={openCart}
                        visible={props.product.count != 0 ? 'flex' : 'none'}>
                    <Icon iconId='right-arrow' width='40px' height='40px' viewBox='0 0 20 20'/>
                </Button>
            </BtnBox>
        </StyledCard>
    )
}

