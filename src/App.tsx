import React, {useState} from 'react';
import {Header} from "./layout/header/Header";
import styled, {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./layout/styles/Global.styled";
import {useDarkMode} from "./components/useDarkMode";
import {darkTheme, lightTheme} from "./layout/styles/Theme";
import {About} from "./layout/main/about/About";
import {GoTopBtn} from "./components/GoTopBtn";
import {Footer} from "./layout/footer/Footer";
import {Catalog} from "./layout/main/catalog/Catalog";
import {Provider} from "react-redux";
import store from "./Redux/redux-store";
import {ProductDetails} from "./layout/main/productDetails/ProductDetails";

function App() {

    const [theme, themeToggle] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    const [overflow, overflowToggle] = useState(true)
    const [isCartOpen, toggleCart] = useState(false)

    const handleOverflow = (isComponentOpen: boolean) => {
        isComponentOpen ? overflowToggle(false) :
            overflowToggle(true)
    }


    return (
        // @ts-ignore
        <Provider store={store}>
            <StyledApp>
                <ThemeProvider theme={themeMode}>
                    <GlobalStyle customTheme={theme} overflow={overflow}/>
                    <Header theme={theme} themeToggle={themeToggle} handleOverflow={handleOverflow}
                            isCartOpen={isCartOpen} toggleCart={toggleCart}/>
                    {/*<About/>*/}
                    <Catalog theme={theme} handleOverflow={handleOverflow}
                             isCartOpen={isCartOpen} toggleCart={toggleCart}/>
                    <GoTopBtn theme={theme}/>
                    <Footer theme={theme}/>
                </ThemeProvider>
            </StyledApp>
        </Provider>
    );
}

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;


  background-position: 120% 20%;
  background-repeat: no-repeat;
`


export default App;
