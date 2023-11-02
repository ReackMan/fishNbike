import React, {ChangeEvent,  useState} from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Filters} from "../../footer/filters/Filters";
import {Products} from "./products/Products";
import {useAppSelector} from "../../../Redux/redux-store";
import {ProductDetails} from "../productDetails/ProductDetails";

type CatalogPropsType = {
    theme: string
    handleOverflow: (isComponentOpen: boolean) => void
    isCartOpen: boolean
    toggleCart: (isCartOpen: boolean) => void
}

export const Catalog = (props: CatalogPropsType) => {
    const products = useAppSelector(state => state.products)

    const bikeKits = products.bikeKits
    const sonars = products.sonars
    const boats = products.boats
    const accessories = products.accessories
    const allProducts = bikeKits.concat(sonars).concat(boats).concat(accessories)


    const [category, setCategory] = useState('Все')
    const [choice, setChoice] = useState('Все')
    const [firstPrice, setFirstPrice] = useState(1700)
    const [secondPrice, setSecondPrice] = useState(200000)
    const [rangeValue, setRangeValue] = useState([1700, 200000])
    const [productDetailsVisible,
        setProductDetailsVisible] = useState(false)
    const [productId, setProductId] = useState('')


    const handleProductDetails = (id?: string) => {
        setProductDetailsVisible(prevState => !prevState)
        props.handleOverflow(!productDetailsVisible)
        if (id) {
            setProductId(id)
        }
    }
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value)
    }

    const categoryChange = () => {
        setChoice(category)
    }
    const resetFilters = () => {
        setCategory('Все')
        setFirstPrice(1700)
        setSecondPrice(200000)
        setRangeValue([1700, 200000])
        setChoice('Все')
    }

    const rangeSelector = (e: any) => {
        setFirstPrice(e.target.value[0])
        setSecondPrice(e.target.value[1])
        setRangeValue(e.target.value)
    }


    return (
        <StyledCatalog>
            <Container>
                <FlexWrapper>
                    <Filters handleChange={handleChange} category={category} categoryChange={categoryChange}
                             setFirstPrice={setFirstPrice} setSecondPrice={setSecondPrice}
                             resetFilters={resetFilters} productDetailsVisible={productDetailsVisible}
                             priceValue1={firstPrice} priceValue2={secondPrice}
                             rangeValue={rangeValue} rangeSelector={rangeSelector}/>
                    <Products theme={props.theme} choice={choice} allProducts={allProducts} products={products}
                              handleProductDetails={handleProductDetails} productDetailsVisible={productDetailsVisible}
                              isCartOpen={props.isCartOpen} toggleCart={props.toggleCart}
                              handleOverflow={props.handleOverflow}
                              productsItems={
                                  choice === 'Велонаборы' ? bikeKits : choice === 'Эхолоты' ? sonars
                                      : choice === 'Кораблики' ? boats : choice === 'Аксессуары'
                                          ? accessories : allProducts}/>
                    <ProductDetails productDetailsVisible={productDetailsVisible}
                                    handleProductDetails={handleProductDetails}
                                    allProducts={allProducts} productId={productId}/>
                </FlexWrapper>
            </Container>
        </StyledCatalog>
    );
};

const StyledCatalog = styled.div`
  margin-top: 50px;
`
