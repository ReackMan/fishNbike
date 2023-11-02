import styled from "styled-components";

export const StyledLink = styled.div<{ theme: string }>`
  
  span {
    color: ${props => props.theme === 'light'
            ? '#000' : "#fff"};
    line-height: 26px; /* 162.5% */
    text-decoration-line: underline;
    margin-left: 10px;
  }
  

`