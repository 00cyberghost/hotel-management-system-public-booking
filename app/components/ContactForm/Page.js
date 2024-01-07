import React from 'react'

export default function ContactForm() {
  return (
    <section className='wpo-contact-pg-section section-padding'>
         <div className="wpo-contact-title">
            <h2>Have Any Question?</h2>
            <p>It is a long established fact that a reader will be distracted content of a page when looking.</p>
        </div>
        <div className="wpo-contact-form-area">
            <form method="post" className="contact-validation-active" id="contact-form-main">
                <div>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Your Name*" />
                </div>
                <div>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email*" />
                </div>
                <div>
                    <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone*" />
                </div>
                <div>
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Your Subject*" />
                </div>
                <div className="fullwidth">
                    <textarea className="form-control" name="note"  id="note" placeholder="Message..."></textarea>
                </div>
                <div className="submit-area">
                    <button type="submit" className="theme-btn">Get in Touch</button>
                    <div id="loader">
                        <i className="ti-reload"></i>
                    </div>
                </div>
                <div className="clearfix error-handling-messages">
                    <div id="success">Thank you</div>
                    <div id="error"> Error occurred while sending email. Please try again later. </div>
                </div>
            </form>
        </div>
    </section>
  )
}
