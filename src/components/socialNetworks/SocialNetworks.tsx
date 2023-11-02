import React from "react";
import {Logo} from "../logo/Logo";
import {StyledSocialNetworks} from "./StyledSocialNetworks";

type SocialNetworksProps = {
    padding?: string
    theme: string
    placeSocials?: string
}

const SocialNetworks = (props: SocialNetworksProps) => {
    return (
        <StyledSocialNetworks padding={props.padding} placeSocials={props.placeSocials}>
            <Logo iconId={props.theme === 'light' ? 'telegram-light' : 'telegram-dark'} width='30px' height='30px' viewBox='3 3 17 17'/>
            <Logo iconId={props.theme === 'light' ? 'whatsapp-light' : 'whatsapp-dark'} width='30px' height='30px' viewBox='0 0 46 46'/>
        </StyledSocialNetworks>
    )
}



export default SocialNetworks