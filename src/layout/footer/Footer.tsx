import React from 'react';
import styled from "styled-components";
import SocialNetworks from "../../components/socialNetworks/SocialNetworks";
import {FooterMenu} from "./footerMenu/FooterMenu";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";

type FooterPropsType = {
    theme: string
}

export const Footer = (props: FooterPropsType) => {



    return (
        <StyledFooter>
            <Container>
                <FlexWrapper>
                    <p>© 2021 "FishNbike"</p>
                    <FooterMenu theme={props.theme}/>
                    <SocialNetworks theme={props.theme}/>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  background: #f5c4b3;
  margin-top: 200px;
`

const Company = styled.p`
  
`
