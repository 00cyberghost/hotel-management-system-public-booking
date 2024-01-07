"use client"
import Link from "next/link"
import FunFact from "../components/FunFact/Page"
import Testimonial from "../components/Testimonial/Page"

export default function About() {
  return (
    <>
    <div className="wpo-breadcumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="wpo-breadcumb-wrap">
                        <h2>About Us</h2>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><span>About</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src="assets/images/about.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="about-title">
                                    <span>Exclusive Offer</span>
                                    <h2>Enjoy Your Dream Vacation In switzerland</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which dont look even slightly believable. If you are going to use a passage of
                                        Lorem Ipsum, you need to be sure.</p>
                                    <div className="about-info-wrap">
                                        <div className="about-info-left">
                                            <p>2 Days / 3 Night</p>
                                            <ul>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><span><i className="fa fa-star" aria-hidden="true"></i></span></li>
                                            </ul>
                                        </div>
                                        <div className="about-info-right">
                                            <p>Only</p>
                                            <h3>$2500</h3>
                                        </div>
                                    </div>
                                    <a href="room.html" className="theme-btn">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* FunFact */}
        <FunFact />

        {/* testimonial */}
        <Testimonial />
    </>
  )
}
