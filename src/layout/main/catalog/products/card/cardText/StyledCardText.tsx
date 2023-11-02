import styled from "styled-components";
import {mainTheme} from "../../../../../styles/Theme";

export const StyledCardText = styled.div<{ theme: string }>`
  margin: 0 25px 21px 15px;
  
  span {
    color: ${props => props.theme === 'light'
            ? mainTheme.colors.fontLight : mainTheme.colors.customText};
    font-size: 18px;
    font-weight: 300;
    line-height: 26px; /* 144.444% */
  }
  
  p {
    color: ${props => props.theme === 'light'
            ? mainTheme.colors.accentLight : mainTheme.colors.customText};
    font-size: 16px;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    margin: 12px 0 0 0;
  }

  text {
    color: ${props => props.theme === 'light'
            ? mainTheme.colors.accentLight : mainTheme.colors.customText};
    font-size: 14px;
    font-weight: 300;
    line-height: 26px;
  }

`