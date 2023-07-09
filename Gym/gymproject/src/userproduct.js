
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


    const a2c = (aditem) => {
        alert('added succesfully !')
        var url = "http://localhost:12345/cartProduct";
        var postData = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(aditem)
        }
        fetch(url, postData)
            .then(response => response.json())
            .then(tempfile => {
                getProduct();
            })



    }

    return (
        <>
            <section className='user-products bg-blue py-25 mt-1 align-center'>
<h6 className='text text-danger'>Fetchin data . . . . . . . .</h6>
                <div className='row g-4 ' style={{ display: 'flex', flexFlow: 'row wrap', margin: '18px', padding: '10px' }}>
                    {
                        productlist.map((product, index) => {
                            return (
                                <div className='card' key={index} style={{ width: '200px',padding:'10px',margin:'5px' }}>
                                    <img src={product.image} className="card-img-top" width="200px" height="200px" />
                                    <hr style={{ marginBottom: '0.5px', color: 'lime' }} />
                                    <p style={{ fontSize: '14px', margin: '0',color:'black' }}>{product.name}</p>
                                    <p style={{ fontSize: '10px',  margin: '.5px',color:'black' }}>Price: <ii class='fa fa-rupee'> {product.price}</ii></p>
                                    <button className='btn btn-warning btn-sm ' onClick={a2c.bind(this, product)}>Add to cart</button>



                                </div>
                            )
                        })
                    }
                </div>
            </section>




        </>
    )
}
export default Userproducts;