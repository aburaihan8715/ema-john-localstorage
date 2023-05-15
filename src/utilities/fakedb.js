// check local storage if there is shoppingCart or not
const getLocalStorage = () => localStorage.getItem("shopping_cart");

// update shoppingCart that is stored on the local storage
const updateDb = (shoppingCart) => localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));

// add data to the local storage
const addToDb = (id) => {
  let shoppingCart = {};

  // get the shopping cart from local storage
  const localStorage = getLocalStorage();
  if (localStorage) {
    shoppingCart = JSON.parse(localStorage);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  // update the db
  updateDb(shoppingCart);
};

// get db from local storage
const getDb = () => {
  const localStorage = getLocalStorage();
  return localStorage ? JSON.parse(localStorage) : {};
};

// remove from db
const removeFromDb = (id) => {
  const localStorage = getLocalStorage();
  if (localStorage) {
    const shoppingCart = JSON.parse(localStorage);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      //   update the db
      updateDb(shoppingCart);
    }
  }
};

// delete the whole db
const deleteDb = () => {
  localStorage.removeItem("shopping_cart");
  
};

export { addToDb, removeFromDb, deleteDb, getDb };
