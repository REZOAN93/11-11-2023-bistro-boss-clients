import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import OnlineOrder from '../OnlineOrder/OnlineOrder';
import BistroBoss from './BistroBoss';
import Menu from './Menu/Menu';
import Recommends from './Recommends/Recommends';
import Feature from './Feature/Feature';
import Reviews from './Reviews/Reviews';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <OnlineOrder></OnlineOrder>
            <BistroBoss></BistroBoss>
            <Menu></Menu>
            <div className=' bg-black max-w-6xl mb-10 mx-auto text-white'>
                <p className=' font-bold text-4xl p-20 text-center '>Call Us: +88 0192345678910</p>
            </div>
            <Recommends></Recommends>
            <Feature></Feature>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;