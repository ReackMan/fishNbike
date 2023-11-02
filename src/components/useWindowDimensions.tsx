import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: widthInner, innerHeight: heightInner } = window;
    return {
        widthInner,
        heightInner
    };
}


export function useWindowDimensions() {

    const [windowDimensions, setWindowDimensions] =
        useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return windowDimensions;
}