import React from 'react'
import loadable from '@loadable/component';
import { Route, HashRouter } from "react-router-dom";
import { PageContainer } from "./style";
import "./App.css"
// import Header from "./components/header/index";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
import About from "./pages/About";
import AnimaHome from "./pages/anima/AnimaHome";

const Header = loadable(() => import('./components/header/index.js'));
const Footer = loadable(() => import('./components/Footer'));
const Home = loadable(() => import('./pages/Home'));


const App = () => {
    return (
        <HashRouter>
            <>
                <Header />
                <PageContainer>
                    <Route exact path="/" component={Home}/>
                    {/* <Route exact path="/about" component={About}/>   */}
                    {/* <Route exact path="/anima/anime" component={AnimaHome}/> */}
                    <Footer />
                </PageContainer>
            </>
        </HashRouter>
    )
}

export default App;

