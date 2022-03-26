import React, { useState } from 'react';
import axios from "axios";
import '../../App.css';


export default function AddProduct(){
    
 const [Registeration_number , setRegistartionNumber] = useState("");
 const [Item_code , setItemCode] = useState("");
 const [Product_name , setProductName] = useState("");
 const [Product_description  , setProductDescription] = useState("");
 const [Company_name , setCompanyName] = useState("");
 const [Company_adress , setCompanyAdress] = useState("");
 const [VEN_status , setVENStatus] = useState("");
 const [Item_category , setItemCategory] = useState("");

    function sendData(e) {
        e.preventDefault();
        

        const newProduct = {
            Registeration_number,
            Item_code,
            Product_name,
            Product_description,
            Company_name,
            Company_adress,
            VEN_status,
            Item_category


        }

        console.log(newProduct);

        axios.post("http://localhost:8071/product/add", newProduct).then(() => {
            alert("Product added")

            setRegistartionNumber("");
            setItemCode("");
            setProductName("");
            setProductDescription("");
            setCompanyName("");
            setCompanyAdress("");
            setVENStatus("");
            setItemCategory("")

        }).catch((err) => {
            alert(err)
        })


    }

    

    return(
        <div className= "container">
            <form onSubmit = {sendData}>
                <div className="mb-3 row">

                    <h1> Add Product </h1>
                    <label for="Registeration_number" className="form-label">Registration number </label>
                    <input type="Text" className="form-control" id="Registeration_number "  placeholder= 'Enter registration number' 
                    onChange= {(e) =>{
                        setRegistartionNumber(e.target.value);

                    }}/>
                </div>

                <div className="mb-3 row">
                    <label for="Item_code" className="form-label">Item-Code </label>
                    <input type="Text" className="form-control" id="Item_code"  placeholder= 'Enter Item-Code' 
                     onChange= {(e) =>{
                        setItemCode(e.target.value);

                    }}/>
                </div>

                <div className="mb-3">
                    <label for="Product_name" className="form-label">Product Name </label>
                    <input type="Text" className="form-control" id="Product_name"  placeholder= 'Enter product name' 
                    onChange= {(e) =>{
                        setProductName(e.target.value);

                    }}/>
                </div>

                <div className="mb-3">
                    <label for="Product_description" className="form-label">Product Description </label>
                    <input type="Text" className="form-control" id="Product_description"  placeholder= 'Enter product description' 
                    onChange= {(e) =>{
                        setProductDescription(e.target.value);

                    }}/>
                </div>

                <div className="mb-3">
                    <label for="Company_name" className="form-label">Company Name </label>
                    <input type="Text" className="form-control" id="Company_name"  placeholder= 'Enter company name' 
                    onChange= {(e) =>{
                        setCompanyName(e.target.value);

                    }}/>
                </div>

                <div className="mb-3">
                    <label for="Company_address" className="form-label">Company Address </label>
                    <input type="Text" className="form-control" id="Company_address"  placeholder= 'Enter company address' 
                    onChange= {(e) =>{
                        setCompanyAdress(e.target.value);

                    }}/>
                </div>

                <div className="mb-3">
                    <label for="VEN_status" className="form-label">VEN-Status </label>
                    <input type="Text" className="form-control" id="VEN_status"  placeholder= 'Enter VEN-Status' 
                    onChange= {(e) =>{
                        setVENStatus(e.target.value);

                    }}/>
                </div>

                <div className="mb-3">
                    <label for="Item_category" className="form-label">Item-Category </label>
                    <input type="Text" className="form-control" id="Item_category"  placeholder= 'Enter Item-Category' 
                    onChange= {(e) =>{
                        setItemCategory(e.target.value);

                    }}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
                
            </form>

        </div>


    )


} 
