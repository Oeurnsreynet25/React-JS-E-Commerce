import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path based on structure
import SlideShow from './SlideShow';
import Service from './Service';
import Men from './Men';
import Women from './Women';
import Sale from './Sale';
import Blog from './Blog';
import Testimon from './Testimon';
import Subscribe from './Subscribe';
import Instagram from './Instagram';
import Footer from './Footer';

function Homepage() {
    return (
       <div>
        <Navbar />
        <SlideShow />
        <Service />
        <Men />
        <Women />
        <Sale />
        <Blog />
        <Testimon />
        <Subscribe />
        <Instagram />
        <Footer />
       </div>
    );
}

export default Homepage;
