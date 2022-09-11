import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([])
    const [searchTerm, setSeacrhTerm] = useState("");
    useEffect(() => {
        const url = 'data.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const getSizeOption = () => {
        return [...new Set(products.map(product => product.size))];
    }

    const getData = (data) => {
        setSeacrhTerm(data)
        // console.log(data)
    }
    return (
        <div>
            <Navbar size={getSizeOption()} getData={getData} />
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
                            products.filter((products)=>{
                                if(searchTerm == ""){
                                    return products
                                }else if(products.product_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                    return products
                                }

                                }
                            ).map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Products;