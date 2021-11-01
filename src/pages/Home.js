import React, { Component } from "react";
import { StyledSection } from "../components/home/HomeElements";
import {HomeComponent} from "../components/home/HomeComponent";

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