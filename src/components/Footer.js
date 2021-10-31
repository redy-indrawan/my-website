import styled from '@emotion/styled';

const Footer = () => {
    const FooterContainer = styled.div`
        margin-top:auto; 
    `;

    const FooterContent = styled.p`
        font-family: var(--fontTitle);
        text-align: center;
    `;
    return (
        <FooterContainer>
            <FooterContent>Redy Indrawan © 2021</FooterContent>
        </FooterContainer>
    )
};

export default Footer;