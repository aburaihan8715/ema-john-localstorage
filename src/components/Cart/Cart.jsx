import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { deleteDb } from "../../utilities/fakedb";

const Cart = ({ cartItems, setCartItems }) => {
  let totalQuantityOfProduct = 0;
  // const totalPrice = cartItems.reduce((prevPrice, item) => {
  //   return prevPrice + item.price;
  // }, 0);
  console.log(cartItems);
  let totalPrice = 0;
  let totalShipping = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalQuantityOfProduct += cartItems[i].quantity;
    totalPrice += cartItems[i].price * cartItems[i].quantity;
    totalShipping += cartItems[i].shipping * cartItems[i].quantity;
  }
  const tax = parseFloat((totalPrice * 0.12).toFixed(2));
  const grandTotal = parseFloat((totalPrice + totalShipping + tax).toFixed(2));

  const clearCartHandler = () => {
    deleteDb();
    setCartItems([]);
  };

  return (
    <div className="cart_container">
      <h3 className="heading_secondary mb_lg">Order Summary</h3>
      <div className="cart_content mb_lg">
        <p className="cart_items">Total Items : {totalQuantityOfProduct}</p>
        <p className="cart_price">Total Price: ${totalPrice}</p>
        <p className="cart_shipping_charge">Shipping Charge: ${totalShipping}</p>
        <p className="cart_tax">Tax(12%): ${tax}</p>
        <p className="cart_grand_total">Grand Total: ${grandTotal}</p>
      </div>
      <div className="cart_action">
        <button onClick={clearCartHandler} className="btn cart_clear_btn mb_sm">
          <span className="mr_sm">Clear Cart</span>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <br />
        <a href="#" className="btn cart_review_btn">
          <span className="mr_sm">Review Order</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default Cart;
