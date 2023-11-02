import React from 'react';
import {Link, List, ListItem, Mask} from "../../../components/menu/StyledMenu";
import styled from "styled-components";

export type FooterMenuPropsType = {
    alignItems?: string
    justContent?: string
    color?: string
    theme: string
    asas?: string
    placeMenu?: string
    flexGrow?: string
}


const tabs = [
    { href: '/', tabName: 'Главная' },
    { href: '/catalog', tabName: 'Каталог' },
    { href: '/delivery', tabName: 'Доставка' },
]


export const FooterMenu = (props: FooterMenuPropsType) => {
    return (
        <StyledFooterMenu alignItems={props.alignItems} justContent={props.justContent}
                    color={props.color} placeMenu={props.placeMenu} flexGrow={props.flexGrow}>
            <List>
                {tabs.map((tab, index) => (
                    <ListItem key={index} theme={props.theme}>
                        <Link href={tab.href}>
                            {tab.tabName}
                            <Mask theme={props.theme}>
                                <span>{tab.tabName}</span>
                            </Mask>
                            <Mask theme={props.theme}>
                                <span>{tab.tabName}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </StyledFooterMenu>
    );
};

const StyledFooterMenu = styled.nav<FooterMenuPropsType>`
  display: flex;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justContent || 'end'};
`
