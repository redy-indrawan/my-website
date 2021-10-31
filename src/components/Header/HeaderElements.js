import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1200px) / 2);
    z-index: 10;
    font-size: 1.2rem;
    /* border-bottom: dashed #553d45; */
    box-shadow: 0px 1px 10px #553d45;

    @media (min-width: 960px) and (max-width: 1115px) {
        padding: 0.2rem calc((100vw - 900px) / 2);
    }

    @media (min-width: 861px) and (max-width: 959px) {
        padding: 0.2rem calc((100vw - 800px) / 2);
    }

    @media (min-width: 769px) and (max-width: 860px) {
        padding: 0.2rem calc((100vw - 700px) / 2);
    }
`;

export const NavLogo = styled.h1`
    color: #fff;
    justify-content: start;
    margin-left: 20px;
    cursor: pointer;
    font-family: "MyFont";
`;

export const LogoImg = styled.img`
    width: 100%;
    height: auto;
    max-width: 80px;
`;

export const ContainerIcons = styled.div`

`;

export const IconBars = styled(FaBars)`
    display: none;
    color: #553d45;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        font-size: 1.8rem;
        top: 0;
        right: 0;
        transform: translate(-100%, 98%);
        
        cursor: pointer;
    }
`;

export const IconTimes = styled(FaTimes)`
    display: none;
    color: #553d45;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 98%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const StyledNavLink = styled(NavLink)`
    color: #D0A49D;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: var(--fontTitle);
    font-size: 30px;
    /* &.active {
    color:black;
    } */
    &:hover {
        color: #553d45;
    }
`;