import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductInfo.css';

const ProductInfo = () => {
    const [products, setProducts] = useState({ agroChemical: [], organic: [], inorganic: [] });
    const [activeProduct, setActiveProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const agroChemicalResponse = await axios.get('http://api.shreejiinternationals.in/products/agrochemical');
                const organicResponse = await axios.get('http://api.shreejiinternationals.in/products/organic');
                const inorganicResponse = await axios.get('http://api.shreejiinternationals.in/products/inorganic');


                console.log('Agrochemical Response:', agroChemicalResponse.data);
                
                setProducts({
                    agroChemical: agroChemicalResponse.data,
                    organic: organicResponse.data,
                    inorganic: inorganicResponse.data,
                });
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const toggleProductInfo = (productId) => {
        setActiveProduct(activeProduct === productId ? null : productId);
    };

    const renderProducts = (category) => (
        products[category].map((product) => (
            <div className="product-container" key={product.id}>
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
        ))
    );

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
            <div className="product-section">
                <h2>Agrochemicals</h2>
                <div className="product-list">
                    {renderProducts('agroChemical')}
                </div>
            </div>
            <div className="product-section">
                <h2>Organic</h2>
                <div className="product-list">
                    {renderProducts('organic')}
                </div>
            </div>
            <div className="product-section">
                <h2>Inorganic</h2>
                <div className="product-list">
                    {renderProducts('inorganic')}
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
