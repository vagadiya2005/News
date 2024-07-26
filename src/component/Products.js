import React, { useState } from 'react';
import './ProductInfo.css';

const products = {
    agroChemical: [
        {
            id: 1,
            name: 'Product 1',
            info: {
                technicalName: 'Tech Name 1',
                casNo: '123-45-6',
                image: 'https://regenesis.com/wp-content/uploads/2020/04/benzene.png',
                packing: 'Packing 1'
            }
        },
        {
            id: 2,
            name: 'Product 2',
            info: {
                technicalName: 'Tech Name 2',
                casNo: '123-45-6',
                image: 'https://regenesis.com/wp-content/uploads/2020/04/benzene.png',
                packing: 'Packing 2'
            }
        },
        
        // Add more Agro Chemical products here
    ],
    organic: [
        {
            id: 2,
            name: 'Product 2',
            info: {
                technicalName: 'Tech Name 2',
                casNo: '123-45-7',
                image: 'https://www.shutterstock.com/image-vector/benzene-molecule-structure-organic-chemical-260nw-1911236971.jpg',
                packing: 'Packing 2'
            }
        },
        // Add more Organic products here
    ],
    inorganic: [
        {
            id: 3,
            name: 'Product 3',
            info: {
                technicalName: 'Tech Name 3',
                casNo: '123-45-8',
                image: 'https://via.placeholder.com/100',
                packing: 'Packing 3'
            }
        },
        // Add more Inorganic products here
    ]
};

const ProductInfo = () => {
    const [activeProduct, setActiveProduct] = useState(null);
    const [activeCategory, setActiveCategory] = useState('agroChemical');

    const toggleProductInfo = (productId) => {
        setActiveProduct(activeProduct === productId ? null : productId);
    };

    return (
        <div className="product-info-container">
            <header className="product-header">
                <div className="cover-image">
                    <div className="cover-text">
                        <h1>Our Products</h1>
                        <p>Quality Products for Quality Produce</p>
                    </div>
                </div>
            </header>
            <nav className="product-menu">
                <button onClick={() => setActiveCategory('agroChemical')}>Agro Chemical</button>
                <button onClick={() => setActiveCategory('organic')}>Organic</button>
                <button onClick={() => setActiveCategory('inorganic')}>Inorganic</button>
            </nav>
            <div className="product-list">
                {products[activeCategory].map((product) => (
                    <div className="product-cotainer" key={product.id}>
                        <div
                            className={`product-item ${activeProduct === product.id ? 'expanded' : ''}`}
                        >
                            <div
                                className="product-title"
                                onClick={() => toggleProductInfo(product.id)}
                            >
                                {product.name}
                            </div>
                            {activeProduct === product.id && (
                                <div className="product-info">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Technical Name</th>
                                                <td>{product.info.technicalName}</td>
                                            </tr>
                                            <tr>
                                                <th>CAS No.</th>
                                                <td>{product.info.casNo}</td>
                                            </tr>
                                            <tr>
                                                <th>Chemical Structure</th>
                                                <td><img src={product.info.image} alt="Chemical Structure" /></td>
                                            </tr>
                                            <tr>
                                                <th>Packing</th>
                                                <td>{product.info.packing}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductInfo;
