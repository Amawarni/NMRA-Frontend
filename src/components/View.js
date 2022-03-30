import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';
import axios from "axios";
import './View.css';







const  View = () =>  {
    const [product, setProduct] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        if(id) {
            getSingleProduct(id);
        }
    }, [id]) 

    const getSingleProduct = async (id) => {
        const response = await axios.get(`http://localhost:8071/product/getproduct/${id}`);
        if(response.status === 200) {
            setProduct(response.data.data);
            console.log("data =>", response.data);
        }
    };
      
    console.log(product);
    return (
        <div style={{marginTop: "150px"}}>
            
            <div className="card">
                <div className="card-header">
                    <p>Product Details</p>
                </div>
             <div className="container">
                 <strong>ID :</strong>
                 <span>{product && product._id}</span>
                 <br />
                 <br />
                 <strong>Registeration_number   :</strong>
                 <span>{product && product.Registeration_number}</span>
                 <br />
                 <br />
                 <strong>Item_code  :</strong>
                 <span>{product && product.Item_code}</span>
                 <br />
                 <br />
                 <strong>Product_name   :</strong>
                 <span>{product && product.Product_name}</span>
                 <br />
                 <br />
                 <strong>Product_description    :</strong>
                 <span>{product && product.Product_description}</span>
                 <br />
                 <br />
                 <strong>Company_name   :</strong>
                 <span>{product && product.Company_name}</span>
                 <br />
                 <br />
                 <strong>Company_adress :</strong>
                 <span>{product && product.Company_Adress}</span>
                 <br />
                 <br />
                 <strong>VEN_status :</strong>
                 <span>{product && product.VEN_status}</span>
                 <br />
                 <br />
                 <strong>Item_category  :</strong>
                 <span>{product && product.Item_category}</span>
                 <br />
                 <br />
                 <Link to="/">
                     <button className="btn-btn-edit"></button>
                 </Link>

            </div>   
            </div>
             
        </div>
    )
}

export default View;
