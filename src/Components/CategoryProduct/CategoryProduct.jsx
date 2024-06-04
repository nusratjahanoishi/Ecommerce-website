import React from 'react';
import './CategoryProduct.css';
import img from '../../assets/banner1.jpg'
import im1 from '../../assets/c.png'
import im2 from '../../assets/d024d2d5c2287617451a94755553dee5.jpg'
import im3 from '../../assets/c.png'

const CategoryProduct = () => {
    const products = [
        { id: 1, name: 'Product 1', description: 'Description 1', price: '$10', image: im1 },
        { id: 2, name: 'Product 2', description: 'Description 2', price: '$20', image: im2},
        { id: 3, name: 'Product 3', description: 'Description 3', price: '$30', image: im3 },
        { id: 4, name: 'Product 4', description: 'Description 4', price: '$40', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Product 5', description: 'Description 5', price: '$50', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Product 6', description: 'Description 6', price: '$60', image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Product 7', description: 'Description 7', price: '$70', image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Product 8', description: 'Description 8', price: '$80', image: 'https://via.placeholder.com/150' },
        { id: 9, name: 'Product 9', description: 'Description 9', price: '$90', image: 'https://via.placeholder.com/150' },
        { id: 10, name: 'Product 10', description: 'Description 10', price: '$100', image: 'https://via.placeholder.com/150' },
        { id: 11, name: 'Product 11', description: 'Description 11', price: '$110', image: 'https://via.placeholder.com/150' },
        { id: 12, name: 'Product 12', description: 'Description 12', price: '$120', image: 'https://via.placeholder.com/150' }
    ];

    return (
        <div className="product-grid">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default CategoryProduct;
