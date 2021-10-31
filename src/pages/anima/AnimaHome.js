import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ANIME }from "../../graphql/AnimaQuery";
import { AnimeStyledSection, AnimeCardContainer, AnimeImageContainer, AnimeImage, AnimeTitleContainer } from "../../components/anima/home/AnimaHomeElements";
import { LongTextCheck } from "../../components/LongTextCheck";

function AnimaHome() {
    const { error, data, loading } = useQuery(GET_ANIME);

    if (loading) return <div>spinner,,,</div>;
    if (error) return <div>error</div>;

    return (
        <AnimeStyledSection>
            {data.Page.media.map(anime => {
                return (
                    <AnimeCardContainer>
                        <AnimeImageContainer>
                            <AnimeImage src={anime.coverImage.large} />
                        </AnimeImageContainer>
                        <AnimeTitleContainer>
                            <LongTextCheck content = {anime.title.romaji} limit = {57}/> 
                        </AnimeTitleContainer>
                    </AnimeCardContainer>
                )
            })}
        </AnimeStyledSection>
    )
}

export default AnimaHome;