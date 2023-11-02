import React, {useState} from 'react';
import styled from "styled-components";
import {BsCart} from "react-icons/bs";
import {IoMdHeartEmpty} from "react-icons/io";
import {Button} from "../../../components/Button";
import {ProductCounter} from "../../../components/productCounter/ProductCounter";
import {ProductsItemType} from "../../../Redux/products-reducer";

type ProductDetailsDataPropsType = {
    product?: ProductsItemType
    addOrder: (productCount: number) => void

}

export const ProductDetailsData = (props: ProductDetailsDataPropsType) => {

    const [startProductCount, setStartProductCount] = useState<number>(0)

    const toCart = () => {
        setStartProductCount(1)
        props.addOrder(startProductCount)
    }

    return (
        <StyledProductDetailsData>
            {/* Product title */}
            <ProductTitle>
                {props.product?.headerText}
            </ProductTitle>
            {/* Product article */}
            <span>{'Артикул: ' + props.product?.id}</span>
            {/* Product price */}
            <span>{props.product?.amount + ' р.'}</span>
            {/* Product params */}
            <ProductParams>{props.product?.itemDescription}</ProductParams>
            {/* Buttons start */}
            <StyledCounter>
                <ProductCounter product={props.product}/>
            </StyledCounter>
            <Button width='400px' bg='#074d4a' alignSelf='center' borderRadius='25px'
                    marginTop='30px' onClick={toCart}>Добавить корзину</Button>
            {/* Buttons end */}
        </StyledProductDetailsData>
    );
};

const StyledProductDetailsData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 400px;
`

const ProductTitle = styled.h2`
  font-size: 34px;
`

const StyledCounter = styled.div`
  display: none;
`

const ProductParams = styled.p`
    white-space: pre-wrap;
`

