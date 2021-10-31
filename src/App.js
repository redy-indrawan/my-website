import React from "react";

import Header from "./components/Header/index";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, HashRouter } from "react-router-dom";
import { PageContainer } from "./style";
import { Global } from "@emotion/react";
import "./App.css"


const App = () => {
    return (
        <HashRouter>
            <>
                <Header />
                <PageContainer>
                    <Route exact path="/" component={Home}/>      
                    <Footer />
                </PageContainer>
            </>
        </HashRouter>
    )
}

export default App;

