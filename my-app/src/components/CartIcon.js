import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // import the Link component

const CartIcon = () => {
  const [cart] = useContext(CartContext);

  return (
    <Link to="/cart"> {/* wrap the CartIcon in a Link component */}
      <div style={{ position: 'fixed', top: '1rem', right: '1rem' }}>
        <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'red' }} />
        <p>Items in cart: {cart.length}</p> 
      </div>
    </Link>
  );
};

export default CartIcon;
