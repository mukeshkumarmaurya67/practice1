import Myfooter from "./myfooter";
import Mynav from "./mynav";
import Userproducts from "./userproduct";
import React, { useState, useEffect } from 'react';

var test;
const Usercart = () => {

    let [productlist, updateProduct] = useState([]);

   let[sum,updatedSum]=useState(0)

    const getProduct = () => {
        var url = "http://localhost:12345/cartProduct";
        fetch(url)
            .then(response => response.json())
            .then(productArray => {
                updateProduct(productArray);
            })
//            console.log(productlist);
    }

    useEffect(() => {
        getProduct();
    }, [1]);

    const deleteItem = (itemid) =>{
        var url = "http://localhost:12345/cartProduct/"+itemid; // change
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
 
    
    setTimeout(function(){ 
        updatedSum(productlist.reduce((a,e)=>a+Number(e.price),0))
     
    },1000)


    let delivery_charge;
    let total;
    let cgst ;
    let sgst ;

    delivery_charge=40.00
    sgst=(sum*0.09);
    cgst=sum * 0.09;
    total=cgst + sgst + sum +delivery_charge;


    ////////////////

    test=productlist;

    return (
        <>
            <Mynav />

            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <table className="table table-striped table-danger mt-5 table-hover">
                            <thead className="table table-success">
                                <tr>
                                    <th>Sl No</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productlist.map((file, index) => {
                                        return (
                                            <tr key={index}>
                                                <td class="tbl4">{index + 1}</td>
                                                <td><img src={file.image} width="150px" height='150px' /></td>
                                                <td class="tbl4">{file.name}</td>
                                                <td class="tbl4">Quantity : <input type="number"  value={1} id="inpt234" /></td>
                                                <td class="tbl4">{file.price}</td>
                                                <td><button  onClick={deleteItem.bind(this, file.id)} ><i class='fa fa-trash' id='icon1' /></button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>







                    <div className="col-lg-4 bg-secondary mt-5">
                        <h4 className="text-center text-dark">Subtotal items  :</h4>
                        <h5 className="text-center text-dark"> Price Details :</h5>
                         
                        <p>Product Price :{sum} </p>
                        <p>CGST (9%) :{cgst}</p>
                        <p>SGST (9%) :{sgst}</p>
                        <p>Delivery Charges : {delivery_charge}</p>
                        <hr></hr>
                        <h4>Total Price: {total}</h4>
                        <button className="btn  btn-warning " id="btn5">Order Now</button>

                    </div>
                </div>
            </div>



        </>
    )
}
export default Usercart;

export {test};
