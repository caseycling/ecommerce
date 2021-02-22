import React, { useState, useEffect } from 'react';

import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  //Fetch products
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  //Fetch cart and set to response
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  //Add to cart
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  //Update quantity
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  //Remove items from cart
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  //REmove all items from cart
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  console.log(cart.line_items);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path='/'>
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path='/cart'>
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
