import React from 'react';

const SingleProduct = (props) => {
    const { category, product_name, size, color, img, price, stock } = props.product
    return (
        <tr>
            <td>{product_name}</td>
            <td>{price}</td>
            <td>{color}</td>
            <td>{size}</td>
        </tr>
    );
};

export default SingleProduct;