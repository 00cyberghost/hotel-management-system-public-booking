/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {

   const path_name = usePathname()

    console.log(path_name)
    useEffect(() => {
        toggleMobileNavigation()
    },[])
  return (
    <header id="header" className="header-light">
             <div className="wpo-site-header" style={{backgroundColor : 'white',background : 'white'}}>
                
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <button type="button" className="navbar-toggler open-btn">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar first-angle"></span>
                                        <span className="icon-bar middle-angle"></span>
                                        <span className="icon-bar last-angle"></span>
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" href="/">
                                        <img src="/assets/images/logo.png" alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link className={path_name == '/' && 'active'} href="/">Home</Link> </li>
                                        <li><Link className={path_name == '/reservation' && 'active'} href="/reservation">Reservation</Link></li>
                                        <li><Link className={path_name == '/rooms' && 'active'} href="/rooms">Rooms</Link></li>
                                        <li><Link className={path_name == '/about' && 'active'} href="/about">About</Link></li>
                                        <li><Link className={path_name == '/faq' && 'active'} href="/faq">FAQs</Link></li>
                                        <li><Link className={path_name == '/contact' && 'active'} href="/contact">Contact</Link></li>
                                        
                                        
                                    </ul>

                                </div>
                                {/* end of nav-collapse */}
                            </div>
                            <div className="col-lg-1 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button className="search-toggle-btn"><i
                                                    className="fi flaticon-search"></i></button>
                                            <div className="header-search-form">
                                                <form>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                                className="fi flaticon-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mini-cart">
                                        <button className="cart-toggle-btn"> <i className="fi flaticon-shopping-cart"></i> <span
                                                className="cart-count">2</span>
                                        </button>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end of container --> */}
                </nav>
            </div>
        </header>
  )
}
