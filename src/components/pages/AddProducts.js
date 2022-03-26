import React, { useState } from 'react';
import axios from "axios";
import '../../App.css';

/*
const AddProduct= () => {
    const [product, setProduct] = useState({
        Registeration_number: "",
        Item_code: "",
        Product_name: "",
        Product_description: "",
        Company_name: "",
        Company_adress: "",
        VEN_status: "",
        Item_category: ""

    });
    const{Registeration_number, Item_code, Product_name, Product_description, Company_name, Company_adress, VEN_status, Item_category } = product;
   const onChange = e => setProduct ({
       ...product, [e.target]: e.target.value
   });
   
    return (
        <div>
        <h3 className= "alert alert-info"> Add New Product</h3>
        <form>
            <div className="form-group">
            <label >Enter Registration number </label>
            <input className= "form-control" type="text" name= "Registeration_number" value={Registeration_number}
            onChange={onChange}/>
            </div>

            <div className="form-group">
            <label >Enter Item-Code </label>
            <input className= "form-control" type="text" name= "Item_code" value={Item_code}
            onChange={onChange}/>
            </div>

            <div className="form-group">
            <label >Enter Product Name </label>
            <input className= "form-control" type="text" name= "Product_name" value={Product_name}
            onChange={onChange}/>
            </div>
            

             <div className="form-group">
             <label >Enter Product Description </label>
            <input className= "form-control" type="text" name= "Product_description" value={Product_description}
            onChange={onChange}/>
            </div>

            <div className="form-group">
            <label >Enter Company Name</label>
            <input className= "form-control" type="text" name= "Company_name" value={Company_name}
            onChange={onChange}/>
            </div>

            <div className="form-group">
            <label >Enter Company_address </label>
            <input className= "form-control" type="text" name= "Company_adress" value={Company_adress}
            onChange={onChange}/>
            </div>

            <div className="form-group">
            <label >Enter VEN-Status </label>
            <input className= "form-control" type="text" name= "VEN_status" value={VEN_status}
            onChange={onChange}/>
            </div>

            <div className="form-group">
            <label >Enter Item_category </label>
            <input className= "form-control" type="text" name= "Item_category" value={Item_category}
            onChange={onChange}/>
            </div>

            <input type='submit' value='Save Now' className='btn btn-success' />
            

        </form>
        </div>
    );
};

export default AddProduct;*/
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
