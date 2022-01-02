import React from 'react';
import Categories from '../Categories/Categories';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Workes from '../Workes/Workes';

const Home = () => {
    return (
        <div>
            <Header/>
            <Categories/>
            <Workes/>
            <ClientsFeedback/>
            <Footer/>
        </div>
    );
};

export default Home;