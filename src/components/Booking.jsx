import axios from 'axios';
import React, { useState } from 'react';
import Nav from './Nav';

const Booking = () => {
  const [input, changeInput] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    slot: "",
    sport: "",
    players: ""
  });

  const inputHandler = (e) => {
    changeInput({ ...input, [e.target.name]: e.target.value });
  };

  const readValues = () => {
    console.log(input);
    axios.post("http://localhost:4000/bookturf", input).then(() => {
      alert("Booking Successful");
    }).catch(() => {
      alert("Booking Failed");
    });
  };

  return (
    <div>
      <Nav />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 align="center" className='text-success'>TURF BOOKING</h1>
            <br />
            <h3 align="center" className='text-secondary'>Enter Booking Details</h3>
            <br />
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row g-3">
              <div className="col-12 col-sm-6 md-6 lg-6 xl-6 xxl-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
              </div>
              <div className="col-12 col-sm-6 md-6 lg-6 xl-6 xxl-6">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
              </div>
              <div className="col-12 col-sm-6 md-6 lg-6 xl-6 xxl-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name='email' value={input.email} onChange={inputHandler} />
              </div>
              <div className="col-12 col-sm-6 md-6 lg-6 xl-6 xxl-6">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" name='date' value={input.date} onChange={inputHandler} />
              </div>
              <div className="col-12 col-sm-6 md-6 lg-6 xl-6 xxl-6">
                <label className="form-label">Time Slot</label>
                <select className="form-select" name='slot' value={input.slot} onChange={inputHandler}>
                  <option value="">Select Slot</option>
                  <option value="6-8am">6 AM - 8 AM</option>
                  <option value="8-10am">8 AM - 10 AM</option>
                  <option value="4-6pm">4 PM - 6 PM</option>
                  <option value="6-8pm">6 PM - 8 PM</option>
                  <option value="9-11pm">9 PM - 11 PM</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 md-6 lg-6 xl-6 xxl-6">
                <label className="form-label">Sport</label>
                <select className="form-select" name='sport' value={input.sport} onChange={inputHandler}>
                  <option value="">Select Sport</option>
                  <option value="Football">Football</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Badminton">Badminton</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 md-6 lg-6 xl-6 xxl-6">
                <label className="form-label">No. of Players</label>
                <input
                  type="number"
                  className="form-control"
                  name="players"
                  value={input.players}
                  onChange={inputHandler}
                />
              </div>
              <div className="col-12 sm-12 md-12 lg-12 xl-12 xxl-12">
                <button className="btn btn-primary mt-4 w-100" onClick={readValues}>BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <footer className="campnou-footer bg-dark text-light pt-5 pb-3 mt-5">
                <div className="container text-center text-md-start">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase fw-bold">Camp Nou Arena</h5>
                            <p className="small">Your ultimate destination for turf bookings, coaching sessions, and sports tournaments.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="footer-link">Home</a></li>
                                <li><a href="#" className="footer-link">Select Turf</a></li>
                                <li><a href="#" className="footer-link">Book Now</a></li>
                                <li><a href="#" className="footer-link">Tournaments</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
                            <p className="mb-1">📧 info@campnouarena.com</p>
                            <p className="mb-1">📞 +91 98765 43210</p>
                            <p>📍 Kerala, India</p>
                        </div>
                    </div>
                    <hr className="border-light" />
                    <div className="text-center small">
                        &copy; {new Date().getFullYear()} Camp Nou Arena. All rights reserved.
                    </div>
                </div>
            </footer>
    </div>
  );
};

export default Booking;
