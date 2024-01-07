import Link from "next/link"
export default function Rooms() {
  return (
    
    <>
    {/* <!-- start of breadcumb-section --> */}
        <div className="wpo-breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>Room</h2>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><span>Room</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* <!-- end of wpo-breadcumb-section--> */}
        {/* <!-- wpo-room-area-start --> */}
        <div className="wpo-room-area section-bg section-padding">
            <div className="container">
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
                                        <li><i className="fi flaticon-expand-arrows"></i>52 sqm</li>
                                        <li><i className="fi flaticon-bed"></i>2 Bed</li>
                                        <li><i className="fi flaticon-bathtub"></i>1 Bathroom</li>
                                    </ul>
                                    <h3>$200 <span>/ Night</span></h3>
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
                                        <li><i className="fi flaticon-expand-arrows"></i>52 sqm</li>
                                        <li><i className="fi flaticon-bed"></i>2 Bed</li>
                                        <li><i className="fi flaticon-bathtub"></i>1 Bathroom</li>
                                    </ul>
                                    <h3>$250 <span>/ Night</span></h3>
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
                                        <li><i className="fi flaticon-expand-arrows"></i>52 sqm</li>
                                        <li><i className="fi flaticon-bed"></i>2 Bed</li>
                                        <li><i className="fi flaticon-bathtub"></i>1 Bathroom</li>
                                    </ul>
                                    <h3>$280 <span>/ Night</span></h3>
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
