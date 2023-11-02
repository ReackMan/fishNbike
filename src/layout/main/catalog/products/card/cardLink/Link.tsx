import {Logo} from "../../../../../../components/logo/Logo";
import {StyledLink} from "./StyledLink";

type StyledLinkPropsType = {
    iconId: string
    text: string
    width: string
    height: string
    viewBox: string
    theme: string
}

const Link = (props: StyledLinkPropsType) => {
    return (
        <StyledLink theme={props.theme}>
            <Logo iconId={props.iconId} width={props.width} height={props.height}
                  viewBox={props.viewBox} text={props.text}/>
        </StyledLink>
    )
}

export default Link