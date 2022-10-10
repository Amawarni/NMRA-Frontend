import React from 'react';
import AllProducts from '../product/AllProducts';
import AddProduct from './AddProducts';

function Products() {
    return (
        <div className = "container ">
            <div className="row">
            <div className="col-sm-9">
                <AllProducts/>
            </div>
            </div>
        </div>
    )
}

export default Products

