import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import { useState, useEffect } from "react";
import "./Shop.css";
import { addToDb, getDb } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 9)));
  }, []);

  useEffect(() => {
    const localStorageData = getDb();
    let updatedCart = [];
    for (const id in localStorageData) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = localStorageData[id];
        addedProduct.quantity = quantity;
        updatedCart.push(addedProduct);
      }
      setCartItems(updatedCart);
    }
  }, [products]);

  const addToCartHandler = (product) => {
    const existItem = cartItems.find((cartItem) => cartItem.id === product.id);
    if (!existItem) {
      product.quantity = product.quantity + 1;
    } else {
      product.quantity = existItem.quantity + 1;
    }
    const remainingItems = cartItems.filter((cartItem) => cartItem.id !== product.id);
    const newCartItems = [...remainingItems, product];
    setCartItems(newCartItems);
    addToDb(product.id);
  };

  return (
    <div className="shop">
      <Products products={products} setProducts={setProducts} onAddToCartHandler={addToCartHandler}></Products>
      <Cart cartItems={cartItems} setCartItems={setCartItems}></Cart>
    </div>
  );
};
export default Shop;
