export default function Footer() {
  return (
    // <!-- start of wpo-site-footer-section -->
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src="assets/images/logo.png" alt="blog" />
                                </div>
                                <p>Management consulting includes a broad range of activities, and the many firms and
                                    their members often define these practices.</p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="ti-twitter-alt"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="ti-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="ti-google"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s1">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    <li><a href="service-single.html">Delicious Food</a></li>
                                    <li><a href="service-single.html">Parking Area</a></li>
                                    <li><a href="service-single.html">Free Wifi</a></li>
                                    <li><a href="service-single.html">Swimming Pool</a></li>
                                    <li><a href="service-single.html">Spa Salon</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Important Link</h3>
                                </div>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="destination.html">Populer Destinition</a></li>
                                    <li><a href="room.html">Awesome Rooms</a></li>
                                    <li><a href="service.html">Our Services</a></li>
                                    <li><a href="pricing.html">Pricing Plan</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-placeholder"></i>7 Green Lake Street Crawfordsville,
                                            IN
                                            47933</li>
                                        <li><i className="fi flaticon-phone-call"></i>+1 800 123 456 789</li>
                                        <li><i className="fi flaticon-send"></i>parador@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <!-- end container --> */}
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2021 Parador by <a href="index.html">wpOceans</a>.
                                All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        //<!-- end of wpo-site-footer-section -->
  )
}
