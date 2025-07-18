import React from 'react';
import Nav from './Nav';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Nav />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="https://images.unsplash.com/photo-1570498839593-e565b39455fc?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vdGJhbGwlMjBwaXRjaHxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000"
                                        className="d-block w-100 carousel-img"
                                        alt="Football Turf"
                                    />
                                    <div className="carousel-caption">
                                        <h5>Camp Nou Arena Awaits</h5>
                                        <p>Book,Repeat,Play</p>
                                    </div>

                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://images.pexels.com/photos/9828070/pexels-photo-9828070.jpeg"
                                        className="d-block w-100 carousel-img"
                                        alt="Cricket Field"
                                    />
                                    <div className="carousel-caption">
                                        <h5>Premium Cricket Ground</h5>
                                        <p>Book top-class facilities for every match</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://images.pexels.com/photos/8735104/pexels-photo-8735104.jpeg"
                                        className="d-block w-100 carousel-img"
                                        alt="Stadium"
                                    />
                                    <div className="carousel-caption">
                                        <h5>Play Like a Pro</h5>
                                        <p>Experience your game in high-quality stadium</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <br />

                    <br />
                    <div className="row g-5">
                        <h1 className="text-center">FACILITIES OF TURF</h1>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card h-100">
                                <img src="https://liffatrivandrum.org/wp-content/uploads/2020/01/National-6-KOVAI-DHANAM-2019-2020.jpg" className="card-img-top" alt="Tournament Booking" />
                                <div className="card-body">
                                    <h5 className="card-title">Book for Tournaments</h5>
                                    <p className="card-text">
                                        Organize football or cricket tournaments on premium turfs with full-day access.
                                    </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">🏆 Football & Cricket</li>
                                    <li className="list-group-item">📅 Full-day Booking</li>
                                    <li className="list-group-item">🎤 Announcements & Lights Included</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card h-100" >
                                <img src="https://5.imimg.com/data5/SELLER/Default/2022/7/NO/TC/UJ/134008477/football-turf-4.jpeg" className="card-img-top" alt="Multi-Sport Turf" />
                                <div className="card-body">
                                    <h5 className="card-title">Multi-Sport Turf</h5>
                                    <p className="card-text">
                                        Book for cricket, football, or casual play. Flexible for all formats.
                                    </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">🏏 Cricket Friendly</li>
                                    <li className="list-group-item">⚽ Football Goals</li>
                                    <li className="list-group-item">🕒 Hourly Booking</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card h-100">
                                <img src="https://preview.redd.it/8tieost5yfn61.jpg?width=640&crop=smart&auto=webp&s=d0a37ef773a72295e3b1560a2d40a69921f0c2a4" className="card-img-top" alt="Camp Nou Store" />
                                <div className="card-body">
                                    <h5 className="card-title">Camp Nou Store</h5>
                                    <p className="card-text">
                                        Buy jerseys, shoes, and accessories at our mini store.
                                    </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">👕 Jerseys Available</li>
                                    <li className="list-group-item">🥾 Shoes & Gear</li>
                                    <li className="list-group-item">🛒 On-site Pickup</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="card h-100">
                                <img src="https://media.istockphoto.com/id/1248741443/photo/soccer-training-warm-up-and-slalom-drills-boys-practicing-european-soccer-on-the-grass-school.jpg?s=612x612&w=0&k=20&c=sk4u_FhfjOL_iDKl3AXf56K1Us2Rdu21vD-zPKhg9fM=" className="card-img-top" alt="Kids Coaching" />
                                <div className="card-body">
                                    <h5 className="card-title">Kids Turf Coaching</h5>
                                    <p className="card-text">
                                        Weekend coaching for kids aged 6–14. Learn from certified trainers.
                                    </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">👶 Age 6–14</li>
                                    <li className="list-group-item">📆 Sat & Sun</li>
                                    <li className="list-group-item">🎓 Certified Coaches</li>
                                </ul>
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

export default Home;
