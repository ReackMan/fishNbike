import React, {SetStateAction, Dispatch, ChangeEvent} from 'react';
import Form from 'react-bootstrap/esm/Form';
import styled from "styled-components";
import {Slider} from "@mui/material";
import {BtnBox, Button} from "../../../components/Button";
// import {Dispatch} from "redux";

type FiltersPropsType = {
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
    category: string
    categoryChange: () => void
    priceValue1: number
    priceValue2: number
    resetFilters: () => void
    setFirstPrice: Dispatch<SetStateAction<number>>
    setSecondPrice: Dispatch<SetStateAction<number>>
    rangeValue: number[]
    rangeSelector: (e: any) => void
    productDetailsVisible: boolean
}

export const Filters = (props: FiltersPropsType) => {

    const setPriceFirst = (e: any) => {
        props.setFirstPrice(e.target.value)
    }

    const setPriceSecond = (e: any) => {
        props.setSecondPrice(e.target.value)
    }

    return (
        <StyledFilters productDetailsVisible={props.productDetailsVisible}>
            <h3>Фильтры</h3>
            <FilterBox>
                <h4>Категория</h4>
                <Form.Select aria-label="Default select example" value={props.category}
                             onChange={props.handleChange} defaultValue='Все'>
                    <option>Все</option>
                    <option value="Велонаборы">Велонаборы</option>
                    <option value="Эхолоты">Эхолоты</option>
                    <option value="Кораблики">Кораблики</option>
                    <option value="Аксессуары">Аксессуары</option>
                </Form.Select>
                <h4>Цена</h4>
                <StyledForm>
                    <input type="number" value={props.priceValue1} onChange={setPriceFirst}
                           min={1700} max={200000}/>
                    <input type="number" value={props.priceValue2} onChange={setPriceSecond}
                           min={1700} max={200000}/>
                    <StyledSlider value={props.rangeValue} valueLabelDisplay="auto"
                            onChange={props.rangeSelector} defaultValue={[props.priceValue1, props.priceValue2]}
                            min={1700} max={200000}/>
                </StyledForm>
                <BtnBox marginLeft='0'>
                    <Button width='100%' bg='#000000' color='#ffffff'
                            onClick={props.categoryChange}>Поиск</Button>
                    <Button width='100%' bg='#000000' color='#ffffff'
                            onClick={props.resetFilters}>Сбросить</Button>
                </BtnBox>
            </FilterBox>
        </StyledFilters>
    );
};

const StyledFilters = styled.div<{ productDetailsVisible: boolean }>`
  width: 20%;
  //display: ${props => props.productDetailsVisible === false ? 'flex' : 'none'};
  display: flex;
  flex-direction: column;
  margin-top: 75px;

  h3 {
    margin-bottom: 20px;
  }
  
  h4 {
    margin: 10px 0;
  }
  
`

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`

const StyledSlider = styled(Slider)`
  //color: #000000;
  color: #000000;
  height: 3px;
  padding: 13px 0;

  & .MuiSlider-thumb {
    height: 15px;
    width: 15px;
    background-color: #fff;
    border: 1px solid currentColor;

    &:hover {
      box-shadow: 0 0 0 8px rgba(58, 133, 137, 0.16);
    }

    & .airbnb-bar {
      height: 9px;
      width: 1px;
      background-color: currentColor;
      margin-left: 1px;
      margin-right: 1px;
    }
  ;
  }

  & .MuiSlider-track {
    height: 3px
  }
;

  & .MuiSlider-rail {
    color: #000000;
    opacity: 1;
    height: 3px;
  }
;
`

const FilterBox = styled.div`
  border: 2px solid #000;
  //border-radius: 5px;
  & {
    padding: 0 15px;
  }
`
