import React, { useState, useEffect } from 'react';
import { useHistory,useLocation} from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import './AddEdit.css';
import AddProduct from './pages/AddProducts';

const initialState = {
    Registeration_number: "",
        Item_code: "",
        Product_name: "",
        Product_description: "",
        Company_name: "",
        Company_address: "",
        VEN_status: "",
        Item_category: ""
};

const AddEdit = () => {
    const [state, setState] = useState(initialState);

    const{Registeration_number, Item_code, Product_name, Product_description, Company_name, Company_address, VEN_status, Item_category } = state;

    const history = useHistory();

    const {id} = useParams();

    useEffect(() => {
        if(id) {
            getSingleProduct(id);
        }
    }, [id]) 

    const getSingleProduct = async (id) => {
        const response = await axios.get(`http://localhost:8071/product/getproduct/${id}`);
        if(response.status === 200) {
            setState(response.data.data);
        }
    }
      

    const AddProduct = async (data) => {
        const response = await axios.post(`http://localhost:8071/product/add`, data);
        if (response.status === 200) {
           // toast.success(response.data);
        }

    }
    const updateProduct = async (data,id) => {
        const response = await axios.put(`http://localhost:8071/product/update/${id}`, data);
        if (response.status === 200) {
           // toast.success(response.data);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Registeration_number || Item_code || Product_name || Product_description || Company_name || Company_address || VEN_status || Item_category ) {
            //toast.error("Please Provide value into each input filed");
        }else {
       if(!id) {
        AddProduct(state);
            } else {
             updateProduct(state, id);
         }
        }
    };

    const handleInputChange = (e) => {
       let {name, value}  = e.target;
       setState({...state, [name]: value})
    };

    return (
        <div style={{ marginTop: "100px "}}>
            <form 
            style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center",
            }}
            onSubmit={handleSubmit}
            >
                <h1> Edit Product Details </h1>
                <label htmlFor="Registeration_number ">Registration number </label>
                <input type= "text"
                id = "Registeration_number"
                name= "Registeration_number"
                placeholder= " Enter Registeration number"
                onChange={handleInputChange}
                value={Registeration_number}
                />
                <label htmlFor="Item_code ">Item_code</label>
                <input type= "text"
                id = "Item_code"
                name= "Item_code"
                placeholder= " Enter Item_code"
                onChange={handleInputChange}
                value={Item_code}
                />
                <label htmlFor="Product_name ">Product name </label>
                <input type= "text"
                id = "Product_name"
                name= "Product_name"
                placeholder= " Enter Product_name"
                onChange={handleInputChange}
                value={Product_name}
                />
                <label htmlFor="Product_description ">Product description </label>
                <input type= "text"
                id = "Product_description"
                name= "Product_description"
                placeholder= " Enter Product description"
                onChange={handleInputChange}
                value={Product_description}
                />
                <label htmlFor="Company_name ">Company name </label>
                <input type= "text"
                id = "Company_name"
                name= "Company_name"
                placeholder= " Enter Company name"
                onChange={handleInputChange}
                value={Company_name}
                />
                <label htmlFor="Company_address ">Company address </label>
                <input type= "text"
                id = "Company_address"
                name= "Company_address"
                placeholder= " Enter Company address"
                onChange={handleInputChange}
                value={Company_address}
                />
                
                <label htmlFor="VEN_status ">VEN status </label>
                <input type= "text"
                id = "VEN_status"
                name= "VEN_status"
                placeholder= " Enter VEN status"
                onChange={handleInputChange}
                value={VEN_status}
                />
                <label htmlFor="Item_category ">Item category</label>
                <input type= "text"
                id = "Item_category"
                name= "Item_category"
                placeholder= " Enter Item category"
                onChange={handleInputChange}
                value={Item_category}
                />
                <input type="submit" value= {id ? "update" : "Add"} />
            </form>
           
        </div>
    )
}



    


export default AddEdit

