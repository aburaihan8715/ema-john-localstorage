import Product from "../Product/Product";
import "./Products.css";

const Products = ({ products, setProducts, onAddToCartHandler }) => {
 

  return (
    <div className="products_container">
      {products?.map((product) => (
        <Product key={product.id} product={product} onAddToCartHandler={onAddToCartHandler}></Product>
      ))}
    </div>
  );
};

export default Products;
