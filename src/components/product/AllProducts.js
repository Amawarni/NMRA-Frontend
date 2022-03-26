/*import React, {Fragment, usestate, useContext } from 'react';
import ProductItems from '../ProductItems';
import ProductContext from './ProductContext';


const  AllProducts = () => {

    const productContext  = useContext(ProductContext);
    const { products } = productContext;
    console.log(products)
    return (
        <div>
            
           {(products.map(product => (
               
                //<h1> {product.Product_name}</h1>
               <ProductItems key={product.id} product = {product} />
        


            )))}
        </div>
    )
}

export default AllProducts;


import React, { useState, useEffect } from "react";
import ProductItems from '../ProductItems';
import axios from "axios";


export default function AllProducts() {

    const [products, setProducts] = useState([]);


    useEffect(() => {

        function getProducts() {
            axios.get("http://localhost:8071/product/").then((res) => {
                setProducts(res.data);
            }).catch((err) => {
                alert(err.message);
            })

        }
        
        
        getProducts();

    }, [])



    return(

        <div className= "container">
            <h1>All Products</h1>
            {(products.map(product => (
               
               //<h1> {product.Product_name}</h1>
              <ProductItems key={product.id} product = {product} />
       


           )))}
         
        </div>



    )



}*/

import React, { useState, useEffect, useRef  } from "react";
import "./AllProduct.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css';

toast.configure();

const AllProducts = () => {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await  axios.get("http://localhost:8071/product/");

        if (response.status === 200) {
            setData(response.data);
        }
    };
    
    const onDeleteProduct = async (id) => {
        if(window.confirm("Are you sure that yu want to delete that product record ")) {
            const response = await axios.delete(`http://localhost:8071/product/delete/${id}`);
            if(response.status === 200) {
                toast.success(response.data);
                getProducts();
            }
        }
    }


return (
    <div style= {{merginTop: "250px"}}>
        <table className="styled-table">
            <thread>
                <tr>
                    

                </tr>
            </thread>
            <tbody>
                    {data && data.map((item,index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.Product_name}</td>
                                <td>{item.Registeration_number}</td>
                                <td>{item.Item_code}</td>
                                <td>
                                    <Link to={`update/${item._id}`}>
                                        <button className="btn btn-edit"> Edit </button>
                                    </Link>
                                    <button className="btn btn-delete" onClick={() => onDeleteProduct(item._id)}> Delete </button>
                                    <Link to={`/view/${item._id}`}>
                                        <button className="btn btn-view"> View </button>
                                    </Link>
                                </td>
                                </tr>
                        )
                    })}

            </tbody>

        </table>



    </div>
)

}


    export default AllProducts;