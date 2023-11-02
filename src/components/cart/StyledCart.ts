import styled from "styled-components";
import {mainTheme} from "../../layout/styles/Theme";

export const StyledCart = styled.div<{ isCartOpen: boolean }>`
  display: ${props => props.isCartOpen === true ? 'block' : 'none'};
  z-index: ${props => props.isCartOpen === true ? 10000000 : 4002};
  transition: opacity 0.3s ease 0s;;
  position: fixed;
  opacity: ${props => props.isCartOpen === true ? 1 : 0};
  transform: translateX(${props => props.isCartOpen === true ? '0' : '100%'});
  background-color: rgba(0,0,0,.1);

  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
`
export const StyledCartContent = styled.div<{ isCartOpen: boolean }>`
  display: ${props => props.isCartOpen === true ? 'block' : 'none'};
  //flex-direction: column;
  //justify-content: space-between;
  position: fixed;
  opacity: ${props => props.isCartOpen === true ? 1 : 0};
  transform: translateX(${props => props.isCartOpen === true ? '0' : '100%'});

  margin: 0;
  top: 0;
  right: 0;
  width: 50%;
  max-width: 560px;
  min-height: 100vh;
  max-height: 100%;
  background-color: rgba(255,255,255,1);
  padding: 40px;
  box-sizing: border-box;
  overflow: auto;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
  transition: all .3s ease;
  height: 100%;
`

export const StyledCartButton = styled.button`
  display: block;
  cursor: pointer;
  transform-origin: 16px 11px;
  float: left;
  outline: 0;
  border: 0;
  background: none;
  align-self: end;
`

export const StyledOrderButton = styled.span`
  display: block;
  cursor: pointer;
  width: 20px;
  margin-left: 15px;
`

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 20px 0;
  margin-bottom: 20px;
  //padding-bottom: 25px;
  border-bottom: 1px solid rgba(0,0,0,.2);
`

export const CartOrder = styled.div`
  display: block;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,.2);
  padding-bottom: 20px;
`

export const CartAmount = styled.div`
  padding-top: 12px;
  padding-bottom: 50px;
  font-size: 16px;
  text-align: right;
  font-weight: 600;
  color: #000;
`

export const StyledOrderItem = styled.div`
  padding: 35px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0;
  align-items: center;
`

export const Image = styled.img`
  width: 80px;
  padding-right: 10px;
  object-fit: cover;
`

export const OrderDescription = styled.div`
  width: 165px;
  
  p {
    white-space: pre-wrap;
  }
`


export const OrderAmount = styled.div`
  width: 80px;
`

