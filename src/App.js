import React from "react";


import { Route, HashRouter } from "react-router-dom";
import { PageContainer } from "./style";
import { Global } from "@emotion/react";
import "./App.css"
import Header from "./components/header/index";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AnimaHome from "./pages/anima/AnimaHome";

const App = () => {
    return (
        <HashRouter>
            <>
                <Header />
                <PageContainer>
                    <Route exact path="/" component={Home}/>      
                    {/* <Route exact path="/anima/anime" component={AnimaHome}/> */}
                    <Footer />
                </PageContainer>
            </>
        </HashRouter>
    )
}

export default App;

