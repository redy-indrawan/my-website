import React from "react";
import styled from '@emotion/styled';

const {useState} = React;

export const LongTextCheck = ({ content,limit}) => {
    const [showAll, setShowAll] = useState(false);

    const showMore = () => setShowAll(true);
    const showLess = () => setShowAll(false);

    if (content.length <= limit) {
        return <div>{content}</div>
    }
    if (showAll) {
        return (
            <div> 
                {content} 
                <ReadLessMore onClick={showLess}>Read Less</ReadLessMore>
            </div>
        )
    }
    const toShow = content.substring(0, limit) + "...";
    return (
        <div> 
            {toShow} 
            <ReadLessMore onClick={showMore}>Read more</ReadLessMore>
        </div>
    )
}


const ReadLessMore = styled.div`
    color: var(--clr-secondary);
    cursor: pointer;

    &:hover {
        color: var(--clr-primary);
    }
`;
