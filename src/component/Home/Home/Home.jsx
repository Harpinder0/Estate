import React from 'react';
import About from '../About/About';
import BrowserSupport from '../BrowserSupport/BrowserSupport';
import BuildTools from '../BuildTools/BuildTools';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <main>
            <Header/>
            <BuildTools/>
            <About/>
            <BrowserSupport/>
            <HappyClient/>
            <Pricing/>
            {/* <ScrollTop/>   */}
        </main>
    );
};

export default Home;