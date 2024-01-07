import Link from "next/link"
import ContactForm from "../components/ContactForm/Page"

export default function Faq() {
  return (
    <>

        <div className="wpo-breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>Frequent Questions</h2>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><span>FAQs</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="wpo-faq-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-section-title">
                            <h2>Frequently Asked Question</h2>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-faq-section">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="wpo-benefits-item">
                                        <div className="accordion" id="accordionExample">
                                            <div className="accordion-item">
                                              <h3 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What types of cases does your law firm handle?
                                                </button>
                                              </h3>
                                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime.</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="accordion-item">
                                              <h3 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Before hiring a lawyer, what kind of questions should I ask?
                                                </button>
                                              </h3>
                                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime.</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="accordion-item">
                                              <h3 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Should I meet with multiple attorneys and shop around before hiring one?
                                                </button>
                                              </h3>
                                              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime.</p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="accordion-item">
                                              <h3 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    In addition to billable hours, what other costs can lawyers charge for?
                                                </button>
                                              </h3>
                                              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime.</p>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* ContactForm */}
        <ContactForm />
    </>
  )
}
