import React from 'react';
import {Link, List, ListItem, Mask, StyledBurgerMenu} from "./StyledBurgerMenu";
import {ToggleBtn} from "../ToggleTheme";

export type BurgerMenuPropsType = {
    alignItems?: string
    justContent?: string
    color?: string
    theme: string
    asas?: string
    isMenuOpen?: boolean
    themeToggle: () => void
    menuRef?: any
}


const tabs = [
    { href: '#home', tabName: 'Home' },
    { href: '#about', tabName: 'About' },
    { href: '', tabName: 'Tech Stack' },
    { href: '', tabName: 'Projects' },
    { href: '', tabName: 'Contact' }
]

export const BurgerMenu = (props: BurgerMenuPropsType) => {

    return (
        <StyledBurgerMenu id={'burger_menu'} justContent={props.justContent} isMenuOpen={props.isMenuOpen}
                          theme={props.theme} ref={props.menuRef}>
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
            <ToggleBtn theme={props.theme} themeToggle={props.themeToggle}/>
        </StyledBurgerMenu>
    );
};

