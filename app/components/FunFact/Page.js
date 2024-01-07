import { useEffect } from "react"
export default function FunFact() {

    useEffect(() => handleFunFacts(),[])
    
  return (
    // <!-- start wpo-fun-fact-section -->
        <section className="wpo-fun-fact-section-s2 section-padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            <div className="grid">
                                <div className="info">
                                    <h3><span className="odometer" data-count="302">00</span>+</h3>
                                    <p>Room & Suites</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span className="odometer" data-count="25">00</span></h3>
                                    <p>Restaurant</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span className="odometer" data-count="510">00</span>+</h3>
                                    <p>Exceptional Food</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span className="odometer" data-count="65">00</span></h3>
                                    <p>Destination</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            {/* <!-- end container --> */}
        </section>
        // <!-- end wpo-fun-fact-section -->
  )
}
