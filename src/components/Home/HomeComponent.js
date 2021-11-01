import React from "react";
import { Container, ContentLeft, ContentRight, ContentTitle, ContentParagraph, ContentImage } from "./HomeElements";
import MyImg from "../../assets/images/redy-2-color-circle.png";
// import MyImgFallback from "../../assets/images/redy-2-color-circle.png";
import "../blur.css";

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

  const [isLoaded, setIsLoaded] = React.useState(false);

  return width < breakpoint ? 
  <Container>
    <ContentRight>
      <React.Fragment>
        <ContentImage className="thumb"src={MyImg} alt="Greeting Image Thumb" style={{ visibility: isLoaded ? "hidden" : "visible" }} />
        <ContentImage className="full" src={MyImg} alt="Greeting Image Full" onLoad={() => {setIsLoaded(true);}} style={{ opacity: isLoaded ? 1 : 0 }} />
        {/* <ContentImage className="thumb"src={MyImg} fallback={MyImgFallback} alt="Greeting Image Thumb" style={{ visibility: isLoaded ? "hidden" : "visible" }} />
        <ContentImage className="full" src={MyImg} fallback={MyImgFallback} alt="Greeting Image Full" onLoad={() => {setIsLoaded(true);}} style={{ opacity: isLoaded ? 1 : 0 }} /> */}
      </React.Fragment>
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
      <React.Fragment>
        <ContentImage className="thumb"src={MyImg} alt="Greeting Image Thumb" style={{ visibility: isLoaded ? "hidden" : "visible" }} />
        <ContentImage className="full" src={MyImg} alt="Greeting Image Full" onLoad={() => {setIsLoaded(true);}} style={{ opacity: isLoaded ? 1 : 0 }} />
      </React.Fragment>
    </ContentRight>
  </Container>
}