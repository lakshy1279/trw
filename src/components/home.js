import React from 'react';
import Navbar from './navbar';
import Home1 from './home1';
import Event from './events';
import Community from './community';
import Testinomial from './testionamials';
import Post from './post';
import Contact from './contact';
import Footer from './footer';
function Home()
{
    return ( <div className="body-inner">
    <Home1/>
    <Event/>
    <div class="container">
    <Community/>
    <Testinomial/>
    <Post/>
    </div>
    <Contact/>
    <Footer/>
</div>)
}

export default Home;