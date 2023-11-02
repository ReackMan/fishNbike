import styled from "styled-components";

type FlexWrapperProps = {
    direction?: string
    justCont?: string
    align?: string
    wrap?: string
    gap?: string
    padding?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justCont || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap};
  padding: ${props => props.padding || 0};
  height: 100%;
  
`