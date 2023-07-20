import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBBadge,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function App() {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <img
            className="me-2"
            width="45px"
            src="https://cdn-icons-png.flaticon.com/512/438/438560.png"
            alt=""
          />
          <h2 style={{ color: "yellowgreen" }}>Phone Store</h2>
        </MDBNavbarBrand>
        <span>
          <Link to="/">All products</Link>
        </span>
        <div className="me-3 mt-2 position-relative d-inline-block">
          <MDBBtn color="secondary" onClick={() => navigate(`/cart`)}>
            Go to Cart
          </MDBBtn>
          <MDBBadge
            color="danger"
            light
            pill
            className="position-absolute translate-middle"
          >
            {cart.length}
          </MDBBadge>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}
