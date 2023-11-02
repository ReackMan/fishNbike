import {useState, useEffect, useCallback} from 'react';
import {useWindowDimensions} from "../useWindowDimensions";

export const useBurgerMenu = (): [boolean, () => void] => {

    const [isMenuOpen, toggleMenu] = useState<boolean>(false)

    const toggleBurgerMenu = useCallback( () => {

        toggleMenu((prevState) => !prevState);
    },[])

    return [isMenuOpen, toggleBurgerMenu];
};


export const useOnClickOutside = (refs: any, handler: any) => {

    useEffect(() => {
        const listener = (event: any) => {

            let isTrue = false;

           for(let r in refs) {
               const ref = refs[r].current

               if (!ref || ref.contains(event.target)) {
                   isTrue = true
                    break;
               }
           }

            if(!isTrue) handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [refs, handler]);
};
