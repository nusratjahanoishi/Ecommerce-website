import React from 'react';


import styles from './Header.module.css';
import Navbar from '../Navbar/Navabr';

const Header = () => {
    return (
        <>
        <div className={styles.alert}>
            <p>Due to <span>COVID-19 </span> pandemic, orders may be processed with a slight delay</p>
        </div>

        <div className={styles.container}>
           <div className={styles.links}>
            <a className={styles.link}>About</a>
            <a className={styles.link}>My Account</a>
            <a  className={styles.link}>Wallet</a>
            <a  className={styles.link}>Order Tracking</a>
           </div>

           <div className={styles.secure}>
            <span>100% Secure delivery without contacting the courier</span>
           </div>

           <div className={styles.contact}>
            <p>Need help? Call Us <span>+002374</span></p>
           </div>

           <div className={styles.options}>
            <select className={styles.select}>
                <option value="en">English</option>
                <option value="bn">Bengali</option>
            </select>
            <select className={styles.select}>
                <option value="usd">USD</option>
                <option value="tk">TK</option>
                <option value="inr">Rupee</option>
            </select>
           </div>
         
        </div>
        <Navbar/>
        </>
    );
};

export default Header;
