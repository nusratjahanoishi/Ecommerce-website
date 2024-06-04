import React from 'react';
import banner from '../../../assets/hero6_banner.png';
import styles from './Banner.module.css';
import banner_img from '../../../assets/hero_banner_bg-1536x497 (1).jpg';

const Banner = () => {
    return (
        <div className={styles.bannerRoot} style={{ backgroundImage: `url(${banner_img})` }}>
        
            <img src={banner} alt="Banner" className={styles.bannerImage} />
            <h1>DAILY MART Online shopping center</h1>
        </div>
    );
};

export default Banner;
