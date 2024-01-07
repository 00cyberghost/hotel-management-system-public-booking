import { useEffect } from "react"

export default function HeroSlider() {

    useEffect(() => handleHeroSlider(),[])


  return (
   
    <section className="wpo-hero-slider">
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="slide-inner slide-bg-image" data-background="/assets/images/slider/slide-1.jpg">
                        {/* <!-- <div className="gradient-overlay"></div> --> */}
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Find Your Perfect Place To Stay</h2>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <a href="room.html" className="theme-btn">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* <!-- end slide-inner --> */}
                </div> 
                {/* <!-- end swiper-slide --> */}
                <div className="swiper-slide">
                    <div className="slide-inner slide-bg-image" data-background="/assets/images/slider/slide-2.jpg">
                        {/* <!-- <div className="gradient-overlay"></div> --> */}
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Find Your Perfect Place To Stay</h2>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <a href="room.html" className="theme-btn">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* <!-- end slide-inner --> */}
                </div> 
                {/* <!-- end swiper-slide --> */}
                <div className="swiper-slide">
                    <div className="slide-inner slide-bg-image" data-background="/assets/images/slider/slide-3.jpg">
                        {/* <!-- <div className="gradient-overlay"></div> --> */}
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div data-swiper-parallax="300" className="slide-title">
                                    <h2>Find Your Perfect Place To Stay</h2>
                                </div>
                                <div className="clearfix"></div>
                                <div data-swiper-parallax="500" className="slide-btns">
                                    <a href="room.html" className="theme-btn">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* <!-- end slide-inner --> */}
                </div> 
                {/* <!-- end swiper-slide --> */}
            </div>
            {/* <!-- end swiper-wrapper --> */}

            {/* <!-- swipper controls --> */}
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    </section>

  )
}
