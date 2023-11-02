import styled from "styled-components";

export const StyledSocialNetworks = styled.div<{ padding?: string, placeSocials?: string }>`
  grid-area: socials;
  flex-basis: 181px;
  padding-right: ${props => props.padding};
  
  text-align: end;
  
  display: flex;
  gap: 20px;
  
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: ${props =>
          props.placeSocials === 'header' ? '955px' : ''}) {
    display: none;
  }
`