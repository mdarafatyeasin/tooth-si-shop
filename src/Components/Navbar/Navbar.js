import React from 'react';
import { useState } from 'react';

const Navbar = ({ size, getData }) => {
    // const [searchText, setSearchText] = useState('');
    // // console.log(searchText)
    // const handaleSubmit = (searchText) => {
    //     console.log(searchText)
    // }
    return (
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input onChange={(e)=> {
                    // setSearchText(e.target.value)
                    getData(e.target.value)
                }} type="text" id='name' />
            </div>
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
        </div>
    );
};

export default Navbar;