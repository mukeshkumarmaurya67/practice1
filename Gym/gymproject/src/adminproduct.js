import React, { useState, useEffect } from 'react';


const Adminproduct = () => {

    let [pname, pickName] = useState(" ")
    let [pprice, pickPrice] = useState(" ")
    let [pimage, pickImage] = useState(" ")



    const save = () => {
        var url = "http://localhost:12345/gymProduct";

        var file = { "name": pname, "price": pprice, "image": pimage }


        var postData = {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify(file)
        }

        fetch(url, postData)
            .then(response => response.json())
            .then(serverres => {

                pickName(""); pickPrice(""); pickImage("");
                getProduct(); // to reload the List
            })

    }

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






    const deleteItem = (itemid) =>{
        var url = "http://localhost:12345/gymProduct/"+itemid; // change
        var postData = {
            headers:{'Content-Type':'application/json'},
            method:"DELETE"
        }
        fetch(url, postData)
        .then(response=>response.json())
        .then(serverres=>{
           getProduct(); // to reload the list// change
        })
    }



    return (
        <>
            <h3 className="text-center text-warning mt-3" >Admin Products</h3>


            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-lg-3'>

                        <div className="mb-3">

                            <label>Product Name</label>
                            <input type="text" className='form-control' onChange={obj => pickName(obj.target.value)} value={pname} />
                        </div>

                        <div className="mb-3">
                            <label>Price</label>
                            <input type="number" className="form-control" onChange={obj => pickPrice(obj.target.value)} value={pprice} />
                        </div>

                        <div className="mb-3">
                            <label>Image</label>
                            <input type="password" className="form-control" onChange={obj => pickImage(obj.target.value)} value={pimage} />
                        </div>


                        <div className="mb-3">
                            <center>  <button onClick={save} className="btn btn-primary">Submit</button></center>
                        </div>



                    </div>
                    <div className='col-lg-8'>
                        <table align='right' cellSpacing="5px" cellPadding="50px" className='table table-border table-striped table-primary table-hover shadow'>
                            <thead className='table-dark'>
                                <tr>
                                    <th>Sl No</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productlist.map((product, index) => {
                                        return (
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{product.name}</td>
                                                <td><i>Rs </i> {product.price}</td>
                                                <td><img src={product.image} height="60" width="80" /></td>
                                                <td><button className='btn btn-danger mt-2' onClick={deleteItem.bind(this, product.id)}  >Remove</button>  </td>
                                            </tr>
                                        )

                                    })
                                }


                            </tbody>
                        </table>





                    </div>
                </div>

            </div>


        </>
    )
}
export default Adminproduct;