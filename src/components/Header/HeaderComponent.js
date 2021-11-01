import React from "react";
import {NavLogo, LogoImg} from "./HeaderElements";
import logo from "../../assets/images/redy-1-color-circle.png";
import "../blur.css";

export const HeaderComponent = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    
    return (
       <>
        <NavLogo>
            <React.Fragment>
                <LogoImg className="thumb" src={logo} alt="logo image thumb" style={{ visibility: isLoaded ? "hidden" : "visible" }} />
                <LogoImg className="full" src={logo} alt="logo image full" onLoad={() => {setIsLoaded(true);}} style={{ opacity: isLoaded ? 1 : 0 }} />
            </React.Fragment>
        </NavLogo>
       </>
    )
}