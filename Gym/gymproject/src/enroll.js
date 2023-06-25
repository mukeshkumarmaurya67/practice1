import { useState } from "react";
import Modal from 'react-bootstrap/modal';
import Button from 'react-bootstrap/button';

//gridspace/glutter/bootstrap topic
const EnrollNow = () => {
    let [show, setShow] = useState(false);
    let mdisp = () => { setShow(true) };
    let mhide = () => { setShow(false) };

    let [price, setPrice] = useState("2199.00")

    let updatePrice = (e) => {
        if (e.target.value == 1)
            setPrice(2199.00)

        else if (e.target.value == 2)
            setPrice("4199.00")
        else
            setPrice("5599.00")


    }

    return (
        <>
            <section>
                <div className="container">
                    <h2 className="text-center text-warning main-title-h2" id="textshadow1"><span className="text-dark">OUR </span>PLAN</h2>
                    <h6 className="text-center">Choose Your Pricing Plan</h6>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="enroll-cols">
                                <p>Class dop-in</p>
                                <i class="fa fa-dollar"> </i> 59 <br /> Single Class<br />
                                <p>Check out fees, FAQ & benefits of Gold's Gym
                                    'Membership Plans here.
                                    We provide flexible membership
                                    plans that suit your fitness needs and help to stay ...</p>
                                <a href="#" className="blue-button" onClick={mdisp}>Enroll Now</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="enroll-cols">
                                <p>12 Month Plan</p>
                                <i class="fa fa-dollar">
                                </i>
                                39<br />
                                Single Class
                                <p>Check out fees, FAQ & benefits of Gold's Gym Membership Plans here. We provide flexible membership
                                    plans that suit your fitness needs and help to stay ...</p>
                                <a href="#" className="blue-button" size="sm" onClick={mdisp}>Enroll Now</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="enroll-cols">
                                <p>6 Month unlimited</p>
                                <i class="fa fa-dollar"></i>
                                99<br /> Single Class
                                <p>Check out fees, FAQ & benefits of Gold's Gym Membership Plans here. We provide flexible membership
                                    plans that suit your fitness needs and help to stay ...</p>
                                <a href="#" className="blue-button" size="sm" onClick={mdisp}>Enroll Now</a>
                            </div>
                        </div>
                    </div>


                </div>



                <Modal show={show} centered size="auto">
                    <Modal.Header onClick={mhide} closeButton>
                        <Modal.Title>Subcription Plans....</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>


                            <div className="row mb-2">
                                <div className="col">
                                    <label className="form-label">Plans:</label>
                                    <select className="form-control form-control-sm" onChange={updatePrice}>
                                        <option value="1">3-months</option>
                                        <option value="2">6-months</option>
                                        <option value="3">1-Year</option>
                                    </select></div>

                                <div className="col">
                                    <label className="form-label">Fees:</label>
                                    <input type="text" className="form-control form-control-sm" value={price} disabled />
                                </div>

                                <div className="col">
                                    <label className="form-label">Joining Date:</label>
                                    <input type="date" placeholder="select Joining date" className="form-control form-control-sm" />
                                </div>
                                <div className="col">
                                    <label className="form-label">Age:</label>
                                    <input type="number" placeholder="Age ...." className="form-control form-control-sm" required />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <label className="form-label">Name:</label>
                                    <input type="text" placeholder="Enter name here...." className="enroll-modal-input" required />
                                </div>
                                <div className="col">
                                    <label className="form-label">Number:</label>
                                    <input type="tel" maxLength="10" placeholder="Contact Number...."
                                        required min="6700000000" max="9999999999" className="enroll-modal-input" />
                                </div>
                            </div><br />
                            <label className="form-label">Emai:</label>
                            <input type="mail" size={35} placeholder="example@gmail.com" className="enroll-modal-input" required />
                            <input type="submit" />
                            <button onClick={mhide}>Cancel</button>
                        </form>
                    </Modal.Body>

                </Modal>
            </section>

        </>
    )
}

export default EnrollNow;