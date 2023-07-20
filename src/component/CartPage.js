import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getCartTotal,removeItem,increaseItem,decreaseItem} from '../features/cartSlice';

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCartTotal());
  },[cart])

  const delItem = (delId)=>{
    console.log('delId-->',delId);
    if(window.confirm('Do you want to delete item ?')){
        dispatch(removeItem(delId));
    }
    dispatch(getCartTotal());
  }
  

  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 className="mb-0"><Link to='/' className="hover-zoom">Continue Shopping</Link></h5>
                    </div>
                    <div className="col-sm-6">
                      <h5 className="mb-0">Cart total - {cart.length} items</h5>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  {/* <!-- Single item --> */}
                  {cart.map((cartData) => (
                    <>
                    <div className="row" key={cartData.id}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        {/* <!-- Image --> */}
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={cartData.img}
                            className="w-100"
                            alt=""
                          />
                          <Link to="/">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </Link>
                        </div>
                        {/* <!-- Image --> */}
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        {/* <!-- Data --> */}
                        <p>
                          <strong>{cartData.title}</strong>
                        </p>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                          onClick={()=>delItem(cartData.id)}
                        >
                          <i className="fas fa-trash"></i>&nbsp;
                          <span>Remove Item</span>
                        </button>
                        {/* <!-- Data --> */}
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        {/* <!-- Quantity --> */}
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <button
                            className="btn btn-primary px-3 me-2"
                            onClick={()=>dispatch(decreaseItem(cartData.id))}
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <div className="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              placeholder="Quantity"
                              type="text"
                              className="form-control"
                            />
                            <label className="form-label">
                            Qty: {cartData.quantity}
                            </label>
                          </div>

                          <button
                            className="btn btn-primary px-3 ms-2"
                            onClick={()=>dispatch(increaseItem(cartData.id))}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        {/* <!-- Quantity --> */}

                        {/* <!-- Price --> */}
                        <p className="text-start text-md-center">
                          <strong>Price : $ {cartData.price}</strong>
                        </p>
                        {/* <!-- Price --> */}
                      </div>
                    </div>
                  <hr className="my-4" />
                  </>
                  ))}
                  {/* <!-- Single item --> */}
                </div>
              </div>

              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://aux2.iconspalace.com/uploads/paypal-payment-icon-256.png"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                     <strong>Total Quantity</strong> 
                      <span><strong>{totalQuantity}</strong></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>
                          Total amount
                          <br />
                        </strong>
                        <span>(including of all taxes)</span>
                      </div>
                      <span>
                        <strong>{totalPrice}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
