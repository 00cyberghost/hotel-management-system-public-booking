"use client"
import React from "react"
import { useEffect } from "react"

export default function Checkout() {

    

    useEffect(() => {
        //page behaviour
        checkoutFunctions()
    },[])
  return (
    <>
     {/* <!-- wpo-checkout-area start--> */}
        <div className="wpo-checkout-area section-padding">
            <div className="container">
                <form>
                    <div className="checkout-wrap">
                        <div className="row">
                            <div className="col-lg-8 col-12">
                               
                                <div className="caupon-wrap s2">
                                    <div className="biling-item">
                                        <div className="coupon coupon-3">
                                            <label id="toggle2">Billing Address</label>
                                        </div>
                                        <div className="billing-adress" id="open2">
                                            <div className="contact-form form-style">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <label for="fname1">Full name</label>
                                                        <input type="text" placeholder="" id="fname1" name="fname" />
                                                    </div>
                                                   
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <label for="email4">Email Adress</label>
                                                        <input type="text" placeholder="" id="email4" name="email" />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-12">
                                                        <label for="email2">Phone No.</label>
                                                        <input type="text" placeholder="" id="email2" name="email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="biling-item-2">
                                                
                                                
                                                <div className="note-area">
                                                    <p>Order Notes </p>
                                                    <textarea name="massage"
                                                        placeholder="Note about your order"></textarea>
                                                </div>
                                                <div className="submit-btn-area">
                                                    <ul>
                                                        <li>
                                                            <button className="theme-btn" type="submit">
                                                                Save & continue
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="caupon-wrap s3">
                                    <div className="payment-area">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="coupon coupon-3">
                                                    <label id="toggle4">Payment Method</label>
                                                </div>
                                                <div className="payment-option" id="open4">
                                                    <div className="payment-select">
                                                        <ul>
                                                            <li className="addToggle">
                                                                <input id="add" type="radio" name="payment"
                                                                    checked="checked" value="30" />
                                                                <label for="add">Payment By Card</label>
                                                            </li>
                                                            <li className="removeToggle">
                                                                <input id="remove" type="radio" name="payment"
                                                                    value="30" />
                                                                <label for="remove">Cash On delivery</label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div id="open5" className="payment-name active">
                                                        <ul>
                                                            <li className="visa"><input id="1" type="radio" name="size"
                                                                    value="30" />
                                                                <label for="1">
                                                                    <img src="assets/images/checkout/img-1.png" alt="" />

                                                                </label>
                                                            </li>
                                                            <li className="mas">
                                                                <input id="2" type="radio" name="size" value="30" />
                                                                <label for="2">
                                                                    <img src="assets/images/checkout/img-2.png" alt="" />

                                                                </label>
                                                            </li>
                                                            <li className="ski">
                                                                <input id="3" type="radio" name="size" value="30" />
                                                                <label for="3">
                                                                    <img src="assets/images/checkout/img-3.png" alt="" />

                                                                </label>
                                                            </li>
                                                            <li className="pay">
                                                                <input id="4" type="radio" name="size" value="30" />
                                                                <label for="4">
                                                                    <img src="assets/images/checkout/img-4.png" alt="" />
                                                                </label>
                                                            </li>
                                                        </ul>
                                                        <div className="contact-form form-style">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-md-12 col-12">
                                                                    <label for="holder">Card holder Name</label>
                                                                    <input type="text" placeholder="" id="holder" name="name" />
                                                                </div>
                                                                <div className="col-lg-6 col-md-12 col-12">
                                                                    <label for="card">Card Number</label>
                                                                    <input type="text" placeholder="" id="card" name="card" />
                                                                </div>
                                                                <div className="col-lg-6 col-md-12 col-12">
                                                                    <label for="CVV">CVV</label>
                                                                    <input type="text" placeholder="" id="CVV" name="CVV" />
                                                                </div>
                                                                <div className="col-lg-6 col-md-12 col-12">
                                                                    <label for="date">Expire Date</label>
                                                                    <input type="text" placeholder="" id="date" name="date" />
                                                                </div>
                                                                <div className="col-lg-12 col-md-12 col-12">
                                                                    <div className="submit-btn-area text-center">
                                                                        <button className="theme-btn" type="submit">Place
                                                                            Order</button>
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
                            <div className="col-lg-4 col-12">
                                <div className="cout-order-area">
                                    <div className="oreder-item ">
                                        <ul>
                                            <li className="o-header">Your Order<span>( 6 )</span></li>
                                            <li>Product 1 X 1<span>50</span></li>
                                            <li>Product 2 X 1<span>50</span></li>
                                            <li>Product 3 X 2<span>100</span></li>
                                            <li>Product 4 X 1<span>50</span></li>
                                            <li className="o-middle">Product 5 X 1<span>50</span></li>
                                            <li className="s-total">Sub Total<span>400</span></li>
                                            <li>( + ) VAT<span>100</span></li>
                                            <li>( + ) Eco Tax <span>100</span></li>
                                            <li>( - ) Discount Price<span>100</span></li>
                                            <li className="o-bottom">Total price <span>500</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {/* <!-- wpo-checkout-area end--> */}
    </>
  )
}
