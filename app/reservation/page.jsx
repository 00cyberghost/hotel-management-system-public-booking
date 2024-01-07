import Link from 'next/link'
export default function Reservation() {
  return (
    
   <>
    <div className="wpo-breadcumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="wpo-breadcumb-wrap">
                        <h2>Search Your Reservation</h2>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><span>Reservation</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <section className="wpo-newslatter-section section-padding mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="wpo-section-title-s2">
                            <h2>Search Booking Information</h2>
                            <p>Please Enter Your Booking Number Below</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-newsletter">
                    <div className="newsletter-form">
                        <form>
                            <input type="email" className="form-control" placeholder="Enter Your Email Address..." required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div> 
          
            <div className="n-shape">
                <img src="assets/images/nshape1.png" alt="" />
            </div>
            <div className="n-shape2">
                <img src="assets/images/nshape2.png" alt="" />
            </div>
        </section>
    </>

  )
}
