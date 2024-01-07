import { useEffect } from "react"

export default function Utilities() {

    useEffect(() => handleUtilities(),[])

  return (
    // <!-- wpo-service-area-start -->
        <div className="wpo-service-area-s2">
            <div className="wpo-service-wrap">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-12">
                            <div className="wpo-service-items wpo-service-active owl-carousel">
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <img src="assets/images/service/img-1.jpg" alt="" />
                                    </div> 
                                    <div className="wpo-service-text">
                                        <i className="fi flaticon-food-tray"></i>
                                        <a href="service.html">Delicious Food</a>
                                    </div>
                                </div>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <img src="assets/images/service/img-2.jpg" alt="" />
                                    </div> 
                                    <div className="wpo-service-text">
                                        <i className="fi flaticon-parking"></i>
                                        <a href="service.html">Parking Area</a>
                                    </div>
                                </div>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <img src="assets/images/service/img-3.jpg" alt="" />
                                    </div> 
                                    <div className="wpo-service-text">
                                        <i className="fi flaticon-swimmer"></i>
                                        <a href="service.html">Swimming Pool</a>
                                    </div>
                                </div>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <img src="assets/images/service/img-4.jpg" alt="" />
                                    </div> 
                                    <div className="wpo-service-text">
                                        <i className="fi flaticon-mortar"></i>
                                        <a href="service.html">Spa Salon</a>
                                    </div>
                                </div>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <img src="assets/images/service/img-5.jpg" alt="" />
                                    </div> 
                                    <div className="wpo-service-text">
                                        <i className="fi flaticon-dumbell"></i>
                                        <a href="service.html">Exercise Space</a>
                                    </div>
                                </div>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <img src="assets/images/service/img-6.jpg" alt="" />
                                    </div> 
                                    <div className="wpo-service-text">
                                        <i className="fi flaticon-wifi"></i>
                                        <a href="service.html">Free Wifi</a>
                                    </div>
                                </div>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <img src="assets/images/service/img-7.jpg" alt="" />
                                    </div> 
                                    <div className="wpo-service-text">
                                        <i className="fi flaticon-cappuccino"></i>
                                        <a href="service.html">Breakfast</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //<!-- .service-area-start -->
  )
}
