import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = 'data.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const getSizeOption = () => {
        return [...new Set(products.map(product => product.size))];
    }
    return (
        <div>
            <Navbar size={getSizeOption()} />
            <div className="overflow-x-auto">
                <table className="table table-zebra w-1/2">
                    <thead className='table-nav'>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;