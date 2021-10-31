import React from "react";
import { Container, ContentLeft, ContentRight, ContentTitle, ContentParagraph, ContentImage } from "./HomeElements";
import MyImg from "../../assets/images/logo.png"

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}

export const HomeComponent = () => {
  const { width } = useViewport();
  const breakpoint = 1023;

  return width < breakpoint ? 
  <Container>
    <ContentRight>
      <ContentImage src={MyImg} />
    </ContentRight>
    <ContentLeft>
      <ContentTitle>
        Hi, I'm Redy
      </ContentTitle>
      <ContentParagraph>
        An informatic freshgraduate from Telkom University and an enthusiast of frontend. I love exploring and learning more things about tech stuff. I fell in love with reactJS and javascript and have been trying to improve on it.
      </ContentParagraph>
    </ContentLeft>
  </Container>
  : 
  <Container>
    <ContentLeft>
      <ContentTitle>
        Hi, I'm Redy
      </ContentTitle>
      <ContentParagraph>
        An informatic freshgraduate from Telkom University and an enthusiast of frontend. I love exploring and learning more things about tech stuff. I fell in love with reactJS and javascript and have been trying to improve on it.
      </ContentParagraph>
    </ContentLeft>
    <ContentRight>
      <ContentImage src={MyImg} />
    </ContentRight>
  </Container>
}