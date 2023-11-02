import styled from "styled-components";
import {mainTheme} from "../styles/Theme";

export const StyledHeader = styled.header<{ theme: string }>`
  margin: 0 auto;

  background-color: ${props => props.theme === 'light' 
          ? '#D7FFE0' : mainTheme.colors.accentLight};
  width: 100%;
  height: 80px;
`

export const StyledCartIcon = styled.div<{ onClick: () => void }>`
  text-align: center;
  cursor: pointer;
`