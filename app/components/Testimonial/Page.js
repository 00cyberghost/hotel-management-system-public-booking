import { useEffect } from "react"
export default function Testimonial() {

    useEffect(() => handleTestimonialSlider(),[])
  return (
    // <!-- wpo-testimonial-area start -->
        <div className="wpo-testimonial-area mt-5">
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="testimonial-slider owl-carousel">
                        <div className="wpo-testimonial-item">
                            <div className="wpo-testimonial-img">
                                <img src="assets/images/testimonial/img-1.jpg" alt="" />
                            </div>
                            <div className="wpo-testimonial-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adiping elit, do eiusmod tempor incididunt ut
                                    labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus
                                    commodo maepac cenas.</p>
                                <h2>Elezabeth Marvel</h2>
                                <span>Photographer</span>
                            </div>
                        </div>
                        <div className="wpo-testimonial-item">
                            <div className="wpo-testimonial-img">
                                <img src="assets/images/testimonial/img-2.jpg" alt="" />
                            </div>
                            <div className="wpo-testimonial-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adiping elit, do eiusmod tempor incididunt ut
                                    labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus
                                    commodo maepac cenas.</p>
                                <h2>Marry Jenefer</h2>
                                <span>CEO Of Golden Bravo</span>
                            </div>
                        </div>
                        <div className="wpo-testimonial-item">
                            <div className="wpo-testimonial-img">
                                <img src="assets/images/testimonial/img-3.jpg" alt="" />
                            </div>
                            <div className="wpo-testimonial-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adiping elit, do eiusmod tempor incididunt ut
                                    labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus
                                    commodo maepac cenas.</p>
                                <h2>William Robert</h2>
                                <span>CEO Of Bexima</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //<!-- wpo-testimonial-area end -->
  )
}
