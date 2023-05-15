import productImg from "../../assets/images/default.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = ({ product, onAddToCartHandler,isLoading }) => {
  const { name, price, seller, ratings} = product;

  return (
      <div className="product">
        <div className="product_content">
          <img className="product_img" src={productImg} alt="photo of product" width="" height="" />
          <div className="product_text_box">
            <h3 className="heading_secondary">{name}</h3>
            <p className="product_price">Price: ${price}</p>
            <p className="product_manufacturer">Manufacturer : {seller}</p>
            <p className="product_rating">Rating : {ratings}</p>
          </div>
        </div>
        <div className="product_action">
          <button className="product_btn" onClick={() => onAddToCartHandler(product)}>
            <span>Add to Cart</span>
            <FontAwesomeIcon className="shopping_icon" icon={faCartShopping} />
          </button>
        </div>
      </div>
  );
};

export default Product;
