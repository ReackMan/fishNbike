import styled from "styled-components";

export const StyledProducts = styled.section<{ theme: string, productDetailsVisible: boolean }>`
  //display: ${props => props.productDetailsVisible === false ? 'flex' : 'none'};
  display: flex;
  flex-direction: column;
  width: 80%;
  
`
export const StyledCards = styled.div`
  display: flex;
  gap: 62px 22px;
  
  flex-wrap: wrap;
  justify-content: space-between;


  padding-bottom: 62px;

  &:last-child {
    padding-bottom: 0;
  }
  
  @media screen and (max-width: 944px) {
    justify-content: space-around;
  }
  
  @media screen and (max-width: 632px) {
    justify-content: center;
  }
`

export const ProductsHeader = styled.div`
  h2 {

    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 26px; /* 54.167% */

    margin: 0 0 49px 0;
  }

  h3 {

    text-align: center;
    font-size: 32px;
    font-weight: 400;
    line-height: 26px; /* 81.25% */

    margin: 0 0 110px 0;
  }
`