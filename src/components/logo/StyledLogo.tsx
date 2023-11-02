import styled from "styled-components";

export const StyledLogo = styled.div<{
    textAlign?: string,
    flexBasis?: string,
    padding?: string,
    flexGrow?: string
}>`
  flex-basis: ${props => props.flexBasis};
  text-align: ${props => props.textAlign};
  padding-left: ${props => props.padding};
  flex-grow: ${props => props.flexGrow};

`