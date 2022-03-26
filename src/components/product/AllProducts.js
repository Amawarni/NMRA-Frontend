

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