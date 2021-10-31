import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavLogo, LogoImg, ContainerIcons, IconBars, IconTimes, NavMenu, StyledNavLink } from "./HeaderElements";
import logo from "../../assets/images/logo.png";

class Header extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render () {
        return (
            <Nav>
                <NavLogo><LogoImg src={logo} /></NavLogo>
                <ContainerIcons onClick={this.handleClick}>
                    {this.state.clicked ? <IconTimes /> : <IconBars />}
                </ContainerIcons>
                <NavMenu className={this.state.clicked ? "active" : ""}>
                    <StyledNavLink to ="/">
                        Home
                    </StyledNavLink>
                    <StyledNavLink to ="/">
                        Home
                    </StyledNavLink>
                    <StyledNavLink to ="/">
                        Home
                    </StyledNavLink>
                </NavMenu>
            </Nav>
        )
    }
}

export default Header;