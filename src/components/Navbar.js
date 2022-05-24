import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

import axios from "../axios"
export default function Navbar(){
  const [user, setUser] = useState(null)

  const getSellerProfile = async () => {
    console.log(localStorage.token)
    try {
      const headers = {
          "Authorization": `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
      const resp = await axios.get("/getbuyerprofile", {headers: headers})
      console.log(resp.data.data.first_name)
      setUser(resp.data.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      getSellerProfile()
    }
    
  }, [])
    return(
        <>
        <header className="yellow-header">
          <div className="header__area">
            <div className="header__top d-none d-sm-block">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-5 d-none d-md-block">
                    <div className="header__welcome">
                      <span>Welcome to OJA</span>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-7">
                    <div className="header__action d-flex justify-content-center justify-content-md-end">
                      <ul>
                        <li>
                          <a href="#">My Account</a>
                        </li>
                        <li>
                          <a href="#">My Wishlist</a>
                        </li>
                        <li>
                          {localStorage.token ? (
                              <Link to="/login">{user && user.first_name}</Link>
                          ) : (<Link to="/login">Sign In</Link>)}
                          
                        </li>
                        <li>
                          <a href="#">Compare</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__info">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-4 col-lg-3">
                    <div className="header__info-left d-flex justify-content-center justify-content-sm-between align-items-center">
                      <div className="logo">
                        <Link to="/">
                          <img
                            src="assets/img/logo/logo-black-2.png"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <div className="header__hotline align-items-center d-none d-sm-flex d-lg-none d-xl-flex">
                        <div className="header__hotline-icon">
                          <i className="fal fa-headset" />
                        </div>
                        <div className="header__hotline-info">
                          <span>Hotline Free:</span>
                          <h6>06-900-6789-00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-9">
                    <div className="header__info-right">
                      <div className="header__search f-left d-none d-sm-block">
                        <form action="#">
                          <div className="header__search-box">
                            <input
                              type="text"
                              placeholder="Search For Products..."
                            />
                            <button type="submit">Search</button>
                          </div>
                          <div className="header__search-cat">
                            <select>
                              <option>All Categories</option>
                              <option>Best Seller Products</option>
                              <option>Top 10 Offers</option>
                              <option>New Arrivals</option>
                              <option>Phones &amp; Tablets</option>
                              <option>Electronics &amp; Digital</option>
                              <option>Fashion &amp; Clothings</option>
                              <option>Jewelry &amp; Watches</option>
                              <option>Health &amp; Beauty</option>
                              <option>Sound &amp; Speakers</option>
                              <option>TV &amp; Audio</option>
                              <option>Computers</option>
                            </select>
                          </div>
                        </form>
                      </div>
                      <div className="cart__mini-wrapper d-none d-md-flex f-right p-relative">
                        <a href="javascript:void(0);" className="cart__toggle">
                          <span className="cart__total-item">01</span>
                        </a>
                        <span className="cart__content">
                          <span className="cart__my">My Cart:</span>
                          <span className="cart__total-price">$ 255.00</span>
                        </span>
                        <div className="cart__mini">
                          <div className="cart__close">
                            <button type="button" className="cart__close-btn">
                              <i className="fal fa-times" />
                            </button>
                          </div>
                          <ul>
                            <li>
                              <div className="cart__title">
                                <h4>My Cart</h4>
                                <span>(1 Item in Cart)</span>
                              </div>
                            </li>
                            <li>
                              <div className="cart__item d-flex justify-content-between align-items-center">
                                <div className="cart__inner d-flex">
                                  <div className="cart__thumb">
                                    <a href="product-details.html">
                                      <img
                                        src="assets/img/shop/product/cart/cart-mini-1.jpg"
                                        alt
                                      />
                                    </a>
                                  </div>
                                  <div className="cart__details">
                                    <h6>
                                      <a href="product-details.html">
                                        {" "}
                                        Samsung C49J89: £875, Debenhams Plus{" "}
                                      </a>
                                    </h6>
                                    <div className="cart__price">
                                      <span>$255.00</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="cart__del">
                                  <a href="#">
                                    <i className="fal fa-trash-alt" />
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="cart__sub d-flex justify-content-between align-items-center">
                                <h6>Car Subtotal</h6>
                                <span className="cart__sub-total">$255.00</span>
                              </div>
                            </li>
                            <li>
                              <a
                                href="checkout.html"
                                className="t-y-btn w-100 mb-10"
                              >
                                Proceed to checkout
                              </a>
                              <a
                                href="cart.html"
                                className="t-y-btn t-y-btn-border w-100 mb-10"
                              >
                                view add edit cart
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__bottom">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-9 col-lg-9 col-md-12 col-sm-6 col-6">
                    <div className="header__bottom-left d-flex d-xl-block align-items-center">
                      <div className="side-menu d-xl-none mr-20">
                        <button
                          type="button"
                          className="side-menu-btn side-menu-btn-2 offcanvas-toggle-btn"
                        >
                          <i className="fas fa-bars" />
                        </button>
                      </div>
                      <div className="main-menu main-menu-2 d-none d-md-block">
                        <nav>
                          <ul>
                            <li>
                              <a href="index.html">
                                Home <i className="far fa-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="index.html">Home Style 1</a>
                                </li>
                                <li>
                                  <a href="index-2.html">Home Style 2</a>
                                </li>
                                <li>
                                  <a href="index-3.html">Home Style 3</a>
                                </li>
                                <li>
                                  <a href="index-4.html">Home Style 4</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="product.html">
                                Features <i className="far fa-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="product.html">Product Type</a>
                                </li>
                                <li>
                                  <a href="product.html">
                                    Product Features{" "}
                                    <i className="far fa-angle-down" />
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="product-details.html">
                                        Simple Product
                                      </a>
                                    </li>
                                    <li>
                                      <a href="product-details-config.html">
                                        Configurable Product
                                      </a>
                                    </li>
                                    <li>
                                      <a href="product-details-group.html">
                                        Group Product
                                      </a>
                                    </li>
                                    <li>
                                      <a href="product-details-download.html">
                                        Downloadable Product
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="product.html">Shop By Brand</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="blog.html">
                                Blog <i className="far fa-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                  <a href="blog-detaills.html">Blog Details</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="about.html">about us</a>
                            </li>
                            <li>
                              <a href="contact.html">contact</a>
                            </li>
                            <li>
                              <a href="about.html">
                                pages <i className="far fa-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="login.html">Login</a>
                                </li>
                                <li>
                                  <a href="register.html">Register</a>
                                </li>
                                <li>
                                  <a href="cart.html">Cart</a>
                                </li>
                                <li>
                                  <a href="wishlist.html">Wishlist</a>
                                </li>
                                <li>
                                  <a href="checkout.html">Checkout</a>
                                </li>
                                <li>
                                  <a href="error.html">404 Error</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-sm-6 col-6 d-md-none d-lg-block">
                    <div className="header__bottom-right d-flex justify-content-end">
                      <div className="header__currency">
                        <select>
                          <option>USD</option>
                          <option>USD</option>
                          <option>USD</option>
                          <option>USD</option>
                          <option>USD</option>
                        </select>
                      </div>
                      <div className="header__lang d-md-none d-lg-block">
                        <select>
                          <option>English</option>
                          <option>Bangla</option>
                          <option>Arabic</option>
                          <option>Hindi</option>
                          <option>Urdu</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        </>
    )
}