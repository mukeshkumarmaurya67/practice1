import Mynav from "./mynav";

import React, { useState, useEffect } from 'react';

const Myprofile = () => {





    const btndsp1 = () => {
        document.getElementById("addsp").style.visibility = "visible";
    }
    const btndsp2 = () => {
        document.getElementById("addsp").style.visibility = "hidden";
    }






    let [pname, pickName] = useState("");
    let [paddress, pickAddress] = useState("");
    let [plandmark, pickLandmark] = useState("");
    let [pstate, pickState] = useState("");
    let [ppin, pickPin] = useState("");
    let [pnumber, pickNumber] = useState("");




    const save = () => {

        var useraddress = { "name": pname, "address": paddress, "landmark": plandmark, "state": pstate, "pin": ppin, "number": pnumber };

        var url = "http://localhost:12345/myprofile";
        var postData = {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(useraddress)
        }
        fetch(url, postData)
            .then(response => response.json())
            .then(tempfile => {
                pickAddress(""); pickLandmark(""); pickName(""); pickNumber(""); pickState(""); pickPin("");
                getAddress();
            })



    }











    let [addressList, updatedAddress] = useState([]);

    const getAddress = () => {
        var url = "http://localhost:12345/myprofile";
        fetch(url)
            .then(response => response.json())
            .then(productArray => {
                updatedAddress(productArray);
            })
    }

    useEffect(() => {
        getAddress();
    }, [1]);



    return (
        <>
            <Mynav />



            <div className="container-fluid mt-4">
                <div className="row mt-5">
                    <div className="col-lg-2 mt-4" >
                        Add New Address <button onClick={btndsp1}><i class='fa fa-pencil'></i></button> <button onClick={btndsp2}> <i class='fa fa-ban'> </i> </button> <br />


                        <div id="addsp" className="mt-4">
                            <label>Name</label>
                            <input type='text' className="form-control" onChange={obj => pickName(obj.target.value)} value={pname} />
                            <label>Address</label>
                            <input type='text' className="form-control" onChange={obj => pickAddress(obj.target.value)} value={paddress} />
                            <label>Landmark</label>
                            <input type='text' className="form-control" onChange={obj => pickLandmark(obj.target.value)} value={plandmark} />
                            <label>State</label>
                            <input type='text' className="form-control" onChange={obj => pickState(obj.target.value)} value={pstate} />
                            <label>Pin Code</label>
                            <input type='text' className="form-control" onChange={obj => pickPin(obj.target.value)} value={ppin} />
                            <label>Alternate Number</label>
                            <input type='text' className="form-control" onChange={obj => pickNumber(obj.target.value)} value={pnumber} />
                            <button type="submit" className="btn btn-secondary mt-3" onClick={save}>Submit</button>

                        </div>
                    </div>
                    <div className="col-lg-4 mt-3 bg-light">


                        {
                            addressList.map((adrs, index) => {
                                return (
                                    <div className="container">
                                    <div className="col-lg-" key={index}>

                                        <span className="form-control text-primary" >
                                            Name :{adrs.name}   <input align="right" type="radio" /> <br />
                                            Address :{adrs.address} <br />
                                            Landmark :{adrs.landmark} <br />
                                            State : {adrs.state}<br />
                                            Pin Code : {adrs.pin} <br />
                                            Alternate Number : +91- {adrs.number}
                                        </span>

                                    </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>


















        </>
    )
}
export default Myprofile;