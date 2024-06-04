import React from 'react';
import Header from '../Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Banner from './Banner/Banner';
import CategoryProduct from '../CategoryProduct/CategoryProduct';


const Home = () => {
    return (
        <div>
            <Header/>
            <div className='home'>
                <div>
                <Sidebar/>
                </div>
            
                <div>
                <Banner/>
                <CategoryProduct/>
                </div>
          
            </div>
        </div>
    );
};

export default Home;