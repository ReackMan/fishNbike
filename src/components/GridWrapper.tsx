import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-areas: 
  'logo contacts socials'
  'svg svg svg'
  'menu description description';

  grid-template-columns: 6fr 4fr 2fr;
  grid-template-rows: 5fr 2fr 4fr;

  padding: 0 15px;

  @media screen and (max-width: 992px) {
    grid-template-areas: 
    'logo contacts socials'
    'svg svg svg'
    'menu menu menu'
    'svg2 svg2 svg2'
    'description description description';

    grid-template-columns: 2fr 4fr 2fr;
    grid-template-rows: 5fr 2fr 4fr 2fr 4fr;
  }
  
  @media screen and (max-width: 576px) {
    grid-template-areas: 
    'logo socials'
    'svg svg'
    'menu contacts'
    'svg2 svg2'
    'description description';

    grid-template-columns: 2fr 2fr;
    grid-template-rows: 2fr 1fr 6fr 1fr 2fr;
  }
`