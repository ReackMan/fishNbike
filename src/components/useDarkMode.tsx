import {useEffect, useState} from "react";


export const useDarkMode = () : [string, () => void] => {
    const [theme, setTheme] = useState('light');
    const themeToggle = () => {
        theme === 'light' ? setMode('dark') :
            setMode('light')

    }
    const setMode = (mode: any) => {
        window.localStorage.setItem('theme', mode)

        setTheme(mode)
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, []);

    return [theme, themeToggle]

};


