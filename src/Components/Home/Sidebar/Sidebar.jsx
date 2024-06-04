import React from 'react';
import styles from './Sidebar.module.css'
const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.categoryList}>
                <a href="#">Fruits</a>
                <a href="#">Meats</a>
                <a href="#">Dairy& Bakery</a>
                <a href="#" >Logout</a>
                <a href="#" >Dashboard</a>
                <span>Discount %</span>
            </div>
        </div>
    );
};

export default Sidebar;