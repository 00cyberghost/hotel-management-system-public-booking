import React from 'react'

export default function Result() {
  return (
    <>
    {/* <!-- wpo-room-area-start --> */}
        <div className="wpo-room-area section-bg section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="wpo-section-title-s2">
                            <h2>Search Results</h2>
                        </div>
                    </div>
                </div>
                <div className="room-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="room-item">
                                <div className="room-img">
                                    <img src="assets/images/room/1.jpg" alt="" />
                                </div>
                                <div className="room-content">
                                    <h2><a href="room-single.html">Deluxe Contrast Room</a></h2>
                                    <ul>
                                        <li><strong>Capacity:</strong> 2</li>
                                        <li><strong>Max Children:</strong> 6</li>
                                    </ul>
                                    <h3>$200 <span>/ Night</span></h3>
                                    <a href="hotel-cart.html" className="theme-btn mt-3">Select this room</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="room-item">
                                <div className="room-img">
                                    <img src="assets/images/room/2.jpg" alt="" />
                                </div>
                                <div className="room-content">
                                    <h2><a href="room-single.html">Luxery Twin Room</a></h2>
                                    <ul>
                                        <li><strong>Capacity:</strong> 2</li>
                                        <li><strong>Max Children:</strong> 3</li>
                                    </ul>
                                    <h3>$250 <span>/ Night</span></h3>
                                    <a href="hotel-cart.html" className="theme-btn mt-3">Select this room</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="room-item">
                                <div className="room-img">
                                    <img src="assets/images/room/3.jpg" alt="" />
                                </div>
                                <div className="room-content">
                                    <h2><a href="room-single.html">Single Contrast Room</a></h2>
                                    <ul>
                                        <li><strong>Capacity:</strong> 3</li>
                                        <li><strong>Max Children:</strong> 5</li>
                                    </ul>
                                    <h3>$200 <span>/ Night</span></h3>
                                    <a href="hotel-cart.html" className="theme-btn mt-3">Select this room</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- .room-area-start --> */}
    </>
  )
}
