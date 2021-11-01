import React, { lazy, Suspense } from 'react'

import { Route, HashRouter } from "react-router-dom";
import { PageContainer } from "./style";
import "./App.css"
// import Header from "./components/header/index";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
import About from "./pages/About";
import AnimaHome from "./pages/anima/AnimaHome";

const Header = lazy( () => import('./components/header/index.js'));
const Footer = lazy( () => import('./components/Footer'));
const Home = lazy( () => import('./pages/Home'));

const App = () => {
    return (
        <HashRouter>
            <Suspense fallback={<p>Loading...</p>}>
                <Header />
                <PageContainer>
                    <Route exact path="/" component={Home}/>
                    {/* <Route exact path="/about" component={About}/>   */}
                    {/* <Route exact path="/anima/anime" component={AnimaHome}/> */}
                    <Footer />
                </PageContainer>
            </Suspense>
        </HashRouter>
    )
}

export default App;

