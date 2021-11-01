import styled from '@emotion/styled';

export const StyledSection = styled.section`
    display: flex;
    align-items: center;
    margin-top: 85px;

    @media (max-width: 1023px) {
        margin-top: 10px;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-evenly; */
    @media (max-width: 1023px) {
        flex-direction: column;
    }
`;

export const ContentLeft = styled.div`
    max-width: 30rem;
    margin-right: 150px;
    @media (max-width: 1023px) {
        text-align: center;
        margin-right: 0px;
    }
`;

export const ContentRight = styled.div`

`;

export const ContentTitle = styled.h1`
    font-family: var(--fontTitle);
    font-size: 40px;
`;

export const ContentParagraph = styled.p`
    font-family: var(--fontContent);
    font-size: 18px;
`;

export const ContentImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 300px;
    /* position: absolute; */
    @media (max-width: 1023px) {
        margin-left: 5%;
    }
`;
