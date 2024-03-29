
export default function cart() {
  return (
    
    <>
    {/* <!-- cart-area start --> */}
        <div className="cart-area section-padding">
            <div className="container">
                <div className="form">
                    <div className="cart-wrapper">
                        <div className="row">
                            <div className="col-12">
                                <form action="cart">
                                    <table className="table-responsive cart-wrap">
                                        <thead>
                                            <tr>
                                                <th className="images images-b">Image</th>
                                                <th className="product-2">Product Name</th>
                                                <th className="pr">Quantity</th>
                                                <th className="ptice">Price</th>
                                                <th className="stock">Total Price</th>
                                                <th className="remove remove-b">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="images"><img src="assets/images/cart/img-1.jpg" alt="" /></td>
                                                <td className="product">
                                                    <ul>
                                                        <li className="first-cart"> A Novel Man</li>
                                                        <li>Brand : Cuppa</li>
                                                        <li>Size : XL</li>
                                                    </ul>
                                                </td>
                                                <td className="stock">
                                                    <ul className="input-style">
                                                        <li className="quantity cart-plus-minus">
                                                            <input type="text" value="1" />
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="ptice">$ 250</td>
                                                <td className="stock">$ 250</td>
                                                <td className="action">
                                                    <ul>
                                                        <li className="w-btn"><a data-bs-toggle="tooltip"
                                                                data-bs-html="true" title="Remove from Cart" href="#"><i
                                                                    className="fi ti-trash"></i></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="images"><img src="assets/images/cart/img-2.jpg" alt="" /></td>
                                                <td className="product">
                                                    <ul>
                                                        <li className="first-cart">Feugiat curae nostra</li>
                                                        <li>Brand : Cuppa</li>
                                                        <li>Size : XXL</li>
                                                    </ul>
                                                </td>
                                                <td className="stock">
                                                    <ul className="input-style">
                                                        <li className="quantity cart-plus-minus">
                                                            <input type="text" value="1" />
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="ptice">$ 350</td>
                                                <td className="stock">$ 350</td>
                                                <td className="action">
                                                    <ul>
                                                        <li className="w-btn"><a data-bs-toggle="tooltip"
                                                                data-bs-html="true" title="Remove to Cart" href="#"><i
                                                                    className="fi ti-trash"></i></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="images"><img src="assets/images/cart/img-3.jpg" alt="" /></td>
                                                <td className="product">
                                                    <ul>
                                                        <li className="first-cart">Black  A Novel Man</li>
                                                        <li>Brand : Cuppa</li>
                                                        <li>Size : XXL</li>
                                                    </ul>
                                                </td>
                                                <td className="stock">
                                                    <ul className="input-style">
                                                        <li className="quantity cart-plus-minus">
                                                            <input type="text" value="1" />
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="ptice">$ 450</td>
                                                <td className="stock">$ 450</td>
                                                <td className="action">
                                                    <ul>
                                                        <li className="w-btn"><a data-bs-toggle="tooltip"
                                                                data-bs-html="true" title="Remove to Cart" href="#"><i
                                                                    className="fi ti-trash"></i></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="images"><img src="assets/images/cart/img-4.jpg" alt="" /></td>
                                                <td className="product">
                                                    <ul>
                                                        <li className="first-cart">Red  A Novel Man</li>
                                                        <li>Brand : Cuppa</li>
                                                        <li>Size : L</li>
                                                    </ul>
                                                </td>
                                                <td className="stock">
                                                    <ul className="input-style">
                                                        <li className="quantity cart-plus-minus">
                                                            <input type="text" value="1" />
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="ptice">$ 550</td>
                                                <td className="stock">$ 550</td>
                                                <td className="action">
                                                    <ul>
                                                        <li className="w-btn"><a data-bs-toggle="tooltip"
                                                                data-bs-html="true" title="Remove to Cart" href="#"><i
                                                                    className="fi ti-trash"></i></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="images"><img src="assets/images/cart/img-5.jpg" alt="" /></td>
                                                <td className="product">
                                                    <ul>
                                                        <li className="first-cart">Justo mauris dictumst</li>
                                                        <li>Brand : Cuppa</li>
                                                        <li>Size : M</li>
                                                    </ul>
                                                </td>
                                                <td className="stock">
                                                    <ul className="input-style">
                                                        <li className="quantity cart-plus-minus">
                                                            <input type="text" value="1" />
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="ptice">$ 550</td>
                                                <td className="stock">$ 550</td>
                                                <td className="action">
                                                    <ul>
                                                        <li className="w-btn"><a data-bs-toggle="tooltip"
                                                                data-bs-html="true" title="Remove to Cart" href="#"><i
                                                                    className="fi ti-trash"></i></a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                                <div className="submit-btn-area">
                                    <ul>
                                        <li>
                                            <a className="theme-btn" href="shop.html">Continue Shopping <i className="fa fa-angle-double-right"></i></a>
                                        </li>
                                        <li><button type="submit">Update Cart</button></li>
                                    </ul>
                                </div>
                                <div className="cart-product-list">
                                    <ul>
                                        <li>Total product<span>( 05 )</span></li>
                                        <li>Sub Price<span>$2250</span></li>
                                        <li>Vat<span>$50</span></li>
                                        <li>Eco Tax<span>$100</span></li>
                                        <li>Delivery Charge<span>$100</span></li>
                                        <li className="cart-b">Total Price<span>$2500</span></li>
                                    </ul>
                                </div>

                                <div className="submit-btn-area">
                                    <ul>
                                        <li><a className="theme-btn" href="checkout.html">Proceed to Checkout <i
                                                    className="fa fa-angle-double-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- cart-area end --> */}
    </>
  )
}
