import React from 'react';
import {List, ListItem, Mask, StyledMenu} from "./StyledMenu";
import {Link} from "react-router-dom"

export type MenuPropsType = {
    alignItems?: string
    justContent?: string
    color?: string
    theme: string
    asas?: string
    placeMenu?: string
    flexGrow?: string
}

const firstTabs = [
    { href: '/', tabName: 'Главная' },
    { href: '/catalog', tabName: 'Каталог товаров' },
]

const secondTabs = [
    { href: '/delivery', tabName: 'Доставка' },
    { href: '/about', tabName: 'О компании' }
]

export const HeaderMenu = (props: MenuPropsType) => {
    return (
        <StyledMenu alignItems={props.alignItems} justContent={props.justContent}
                    color={props.color} placeMenu={props.placeMenu} flexGrow={props.flexGrow}>
            <List placeMenu={props.placeMenu}>
                {firstTabs.map((tab, index) => (
                    <ListItem key={index} theme={props.theme}>
                        <Link to={tab.href}>
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
            <input type="text"/>
            <List placeMenu={props.placeMenu}>
                {secondTabs.map((tab, index) => (
                    <ListItem key={index} theme={props.theme}>
                        <Link to={tab.href}>
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
        </StyledMenu>
    );
};

