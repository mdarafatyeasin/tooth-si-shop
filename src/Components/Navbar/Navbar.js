import React from 'react';

const Navbar = ({ size }) => {
    console.log(size)
    return (
        <div>
            <label htmlFor="size">
                <select name="" id="size">
                    <option value="">Size</option>
                    {
                        size.map((singleSize) => (
                            <option value={singleSize} key={singleSize}>
                                {singleSize}
                            </option>
                        ))
                    }
                </select>
            </label>
        </div>
    );
};

export default Navbar;