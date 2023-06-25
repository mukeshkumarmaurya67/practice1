
import React, { useState, useEffect } from 'react';


const Userproducts = () => {

    let [productlist, updateProduct] = useState([]);

    const getProduct = () => {
        var url = "http://localhost:12345/gymProduct";
        fetch(url)
            .then(response => response.json())
            .then(productArray => {
                updateProduct(productArray);
            })
    }

    useEffect(() => {
        getProduct();
    }, [1]);


    const a2c=(aditem)=>{
        alert('added succesfully !')
            var url="http://localhost:12345/cartProduct";
            var postData={
                headers:{'Content-Type':'application/json'},
                method:'POST',
                body:JSON.stringify(aditem)
            }
                       fetch(url,postData)
                       .then(response=>response.json())
                       .then(tempfile=>{
                        getProduct();
                       }) 


        
    }

    return (
        <>
          
            <div className='row' style={{display:'flex',flexFlow:'row wrap',justifyContent:'space-evenly',alignItems:'center',alignContent:'center',margin:'18px',padding:'10px'}}>
                {
                    productlist.map((product,index)=>{
                        return(
                            <div className='card pb-1' key={index} style={{width:'200px'}}>
                                <img src={product.image} className="card-img-top" width="200px" height="200px" />
                                <hr style={{marginBottom:'0.5px',color:'lime'}}/>
                               <p style={{fontSize:'14px',fontWeight:'bold',margin:'0'}}>{product.name}</p>
                                <p style={{fontSize:'14px',fontWeight:'bold',margin:'.5px'}}>Price: <ii class='fa fa-rupee'> {product.price}</ii></p>
                                <button className='btn btn-warning btn-sm ' onClick={a2c.bind(this,product)}>Add to cart</button>



                            </div>
                        )
                    })
                }
            </div>
      



        </>
    )
}
export default Userproducts;