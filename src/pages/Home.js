import React, { Component } from "react";
import { StyledSection } from "../components/Home/HomeElements";
import { HomeComponent } from "../components/Home/HomeComponent";

class Home extends Component {  
    render () {
        return (
            <>
                <StyledSection>
                    <HomeComponent />
                </StyledSection>
            </>
        )
    }
}

export default Home;