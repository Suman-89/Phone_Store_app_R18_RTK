import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function App() {

  const items = useSelector((item) => item.cart.items);
  const dispatch = useDispatch();

  console.log('items-->',items);

  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">
          {
            items.map((itemData)=>(
              <MDBCol className="my-2" size="md" key={itemData.id}>
              <MDBCard>
                <MDBCardImage
                  src={itemData.img}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>{itemData.title}</MDBCardTitle>
                  <MDBCardText>
                    Price : $ {itemData.price}
                  </MDBCardText>
                  <MDBBtn onClick={()=>dispatch(addToCart(itemData))} color='warning'>Add to Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            ))
          }
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
