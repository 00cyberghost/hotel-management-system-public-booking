import Link from 'next/link'
import ContactForm from '../components/ContactForm/Page'

export default function Contact() {
  return (
    <>

        <div className="wpo-breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>Contact Us</h2>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><span>Contact</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-placeholder"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>7 Green Lake Street Crawfordsville, IN 47933</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>Parador@gmail.com</p>
                                            <p>helloyou@gmail.com</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>+1 800 123 456 789</p>
                                            <p>+1 800 123 654 987</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        
                        {/* contactform */}
                        <ContactForm />


                        
                    </div>                
                </div>
            </div>
        </section>
        
        {/* conact us map */}
        <section className="wpo-contact-map-section">
            <h2 className="hidden">Contact map</h2>
            <div className="wpo-contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowfullscreen></iframe>
            </div>
        </section>
    </>
  )
}
