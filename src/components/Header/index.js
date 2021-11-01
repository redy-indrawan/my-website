import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavLogo, LogoImg, ContainerIcons, IconBars, IconTimes, NavMenu, StyledNavLink } from "./HeaderElements";
import logo from "../../assets/images/redy-1-color-circle.png";
import { HeaderComponent } from "./HeaderComponent";

// const [isLoaded, setIsLoaded] = React.useState(false);

class Header extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    
    render () {
        
        return (
            <Nav>
                <HeaderComponent />
                <ContainerIcons onClick={this.handleClick}>
                    {this.state.clicked ? <IconTimes /> : <IconBars />}
                </ContainerIcons>
                <NavMenu className={this.state.clicked ? "active" : ""}>
                    <StyledNavLink to ="/">
                        Home
                    </StyledNavLink>
                    {/* <StyledNavLink to ="/about">
                        About
                    </StyledNavLink> */}
                    {/* <StyledNavLink to ="/anima/anime">
                        Anima
                    </StyledNavLink> */}
                </NavMenu>
            </Nav>
        )
    }
}

export default Header;