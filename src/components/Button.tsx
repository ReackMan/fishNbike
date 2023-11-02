import styled from "styled-components";

export const Button = styled.button<{
    width?: string, bg?: string, padding?: string, marginTop?: string, borderRadius?: string,
    marginRight?: string, color?: string, alignSelf?: string, height?: string, visible?: string
}>`
  width: ${props => props.width};
  background: ${props => props.bg};
  margin: ${props => props.marginTop || 0} ${props => props.marginRight || 0} 0 0;
  color: ${props => props.color};
  display: ${props => props.visible || 'flex'};
  align-items: center;
  justify-content: center;
  align-self: ${props => props.alignSelf || 'end'};
  height: ${props => props.height || '45px'};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius || '4px'};
  cursor: pointer;

`
export const BtnBox = styled.div<{ marginLeft?: string, marginRight?: string,
    width?: string, maxWidth?: string }>`
  //margin: 0 25px 21px 15px;
  width: ${props => props.width || '100px'};
  max-width: ${props => props.maxWidth || '260px'};
  margin: 0 ${props => 
          props.marginRight || 0} 0 ${props => props.marginLeft || 0};
  padding-bottom: 25px;
  align-self: start;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

`