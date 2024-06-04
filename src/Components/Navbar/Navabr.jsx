import React, { useState } from 'react';
import { FaUserCircle, FaSearch } from "react-icons/fa";
import {  MdOutlineShoppingCart } from "react-icons/md";
import styles from './Navbar.module.css';

const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false);

    const toggleCategories = () => {
        setShowCategories(!showCategories);
    };
    return (
        <div className={styles.navbar}>
            <div className={styles.topSection}>
                <div className={styles.branding}>
                    <span className={styles.brandName}>Daily Mart</span>
                    <span className={styles.tagline}>Online shopping center</span>
                </div>
                <div className={styles.searchSection}>
                    <input 
                        className={styles.searchInput} 
                        placeholder='Search for products...' 
                    />
                    <FaSearch className={styles.searchIcon} />
                </div>
                <div className={styles.icons}>
                    <FaUserCircle className={styles.icon} />
                    <MdOutlineShoppingCart className={styles.icon} />
                </div>
            </div>

            <div className={styles.bottomSection}>
            <div className={styles.categories} onClick={toggleCategories}>
                    <span>ALL CATEGORIES</span> 
                    {showCategories && (
                        <div className={styles.categoryList}>
                            <a href="#">Fruits & vegetables</a>
                            <a href="#">Meats</a>
                            <a href="#"> Dairy & Bakery</a>
                            <a href='#'>House & kitchen</a>
                            <a href='#'>Personal healthcare & suppliments</a>
                            <a href='#'>Drinks & Berage</a>
                        </div>
                    )}
                </div>
                <div className={styles.links}>
                    <a href="#" className={styles.link}>HOME</a>
                    <a href="#" className={styles.link}>SHOP</a>
                    <a href="#" className={styles.link}>MEATS & SEAFOOD</a>
                    <a href="#" className={styles.link}>BAKERY</a>
                    <a href="#" className={styles.link}>BLOG</a>
                    <a href="#" className={styles.link}>CONTACT</a>
                    <a href="#" className={styles.link}>BECOME SELLER</a>
                </div>
            </div> 
        </div>
    );
};

export default Navbar;
