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
                console.log('Organic Response:', organicResponse.data);
                console.log('Inorganic Response:', inorganicResponse.data);

                setProducts({
                    agroChemical: Array.isArray(agroChemicalResponse.data) ? agroChemicalResponse.data : [],
                    organic: Array.isArray(organicResponse.data) ? organicResponse.data : [],
                    inorganic: Array.isArray(inorganicResponse.data) ? inorganicResponse.data : [],
                });
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const toggleProductInfo = (_id) => {
        setActiveProduct(activeProduct === _id ? null : _id);
    };

    const renderProducts = (category) => {
        const categoryProducts = products[category];
        if (!Array.isArray(categoryProducts) || categoryProducts.length === 0) {
            return <p>No products available</p>;
        }
        return categoryProducts.map((product) => (
            <div className="product-container" key={product._id}>
                <div
                    className={`product-item ${activeProduct === product._id ? 'expanded' : ''}`}
                >
                    <div
                        className="product-title"
                        onClick={() => toggleProductInfo(product._id)}
                    >
                        {product.name}
                    </div>
                    {activeProduct === product._id && (
                        <div className="product-info">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Technical Name</th>
                                        <td>{product.TechnicalName || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <th>CAS No.</th>
                                        <td>{product.CASno || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <th>Chemical Structure</th>
                                        <td>
                                            <img src={product.ChemicalStructure || 'default-image-url'} alt="Chemical Structure" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Packing</th>
                                        <td>{product.Packing || 'N/A'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        ));
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
