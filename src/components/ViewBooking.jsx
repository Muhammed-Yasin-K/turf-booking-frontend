import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const ViewBooking = () => {
    const [bookings, setBookings] = useState([])
    const [isLoading, setLoading] = useState(true)

    const fetchData = () => {
        axios.get("http://localhost:4000/viewturf")
            .then((response) => {
                setBookings(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Nav />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 align="center">VIEW ALL TURF BOOKINGS</h1>
                        <br />
                    </div>
                </div>

                {isLoading ? (
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <div className="text-center">
                            <div className="spinner-border text-primary" style={{ width: "4rem", height: "4rem" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-3 fs-5 text-dark fw-semibold">Please Wait...</p>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-striped table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Date</th>
                                            <th>Slot</th>
                                            <th>Sport</th>
                                            <th>Players</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookings.map((booking, index) => (
                                            <tr key={index}>
                                                <td>{booking.name}</td>
                                                <td>{booking.phone}</td>
                                                <td>{booking.email}</td>
                                                <td>{booking.date}</td>
                                                <td>{booking.slot}</td>
                                                <td>{booking.sport}</td>
                                                <td>{booking.players}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <footer className="campnou-footer bg-dark text-light pt-5 pb-3 mt-5">
                <div className="container text-center text-md-start ">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase fw-bold">Camp Nou Arena</h5>
                            <p className="small">Your ultimate destination for turf bookings, coaching sessions, and sports tournaments.</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="footer-link">Home</a></li>
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
    )
}

export default ViewBooking
