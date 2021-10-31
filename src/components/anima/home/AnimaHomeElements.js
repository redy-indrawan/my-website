import styled from '@emotion/styled';

export const AnimeStyledSection = styled.section`
    /* display: flex;
    align-items: center; */

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 1rem auto;
    padding: 0;
    /* font-size: 0; */
    text-align: center;
    list-style: none;
`;

export const AnimeCardContainer = styled.div`
    max-width: 10rem;
    width: 100%;
    height: auto;
    margin: 1rem;
    font-size: 1.2rem;
    font-family: var(--fontTitle);
    /* box-shadow: 0 0 3rem -1rem rgba(0,0,0,0.5);
    transition: transform 0.1s ease-in-out, box-shadow 0.1s; */
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    

    &:hover {
        transform: translateY(-0.5rem) scale(1.0125);
        box-shadow: 0 0.5em 3rem -1rem rgba(0,0,0,0.5);
    }
`;

export const AnimeImageContainer = styled.div`
    display: block;
`;

export const AnimeImage = styled.img`
    display: block;
    width: 100%;
    height: 18vw;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`;

export const AnimeTitleContainer = styled.div`
    margin: 10px
`;