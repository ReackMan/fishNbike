import React from 'react';
import styled from 'styled-components'
import {Icon} from "./icon/Icon";

type ToggleThemeProps = {
    theme?: string
    themeToggle: any
}

export const ToggleTheme = (props: ToggleThemeProps) => {


    return (

        <StyledTogglerButton onClick={() => props.themeToggle()}>
            <Icon iconId={props.theme === 'light' ? 'moon' : 'sun'} width='40px' height='40px' viewBox='0 0 64 64'/>
        </StyledTogglerButton>
    );
};

type ToggleBtnPropsType = {
    placeBtn?: string
    theme: string
    themeToggle: () => void
}

export const ToggleBtn = (props: ToggleBtnPropsType) => {

    return (
        <Label placeBtn={props.placeBtn}>
            <Input theme={props.theme} type='checkbox' onChange={() => props.themeToggle()}/>
            <Slider theme={props.theme}>
                <Icon iconId={props.theme === 'light' ? 'moon' : 'sun2'} width='80px'
                      height='40px' viewBox={props.theme === 'light' ? '18.6 -3 94 70' : '-15 2 55 60'}/>
            </Slider>
        </Label>
    )

}


const StyledTogglerButton = styled.div`
  background: ${({theme}) => theme.img};

  align-self: center;
  height: 40px;
  width: 40px;

`

const Label = styled.label<{ placeBtn?: string }>`
  //width: 150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media screen and (max-width: ${props => 
          props.placeBtn === 'header' ? '768px' : ''}) {
    display: none;
  }
`

const Input = styled.input<{ theme: string }>`
  position: absolute;
  left: -99999px;
  top: -99999px;


`

const Slider = styled.span<{ theme: string }>`
  
  display: flex;
  align-items: center;
  border-radius: 100px;
  background-color: ${props => props.theme === 'light' ? '#bfbfbf' : '#1890ff'};
  position: relative;
  transition: background-color 0.2s;

    width: 62px;
    height: 29px;
`
