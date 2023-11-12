import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const [cart] = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map(car => (
        <div key={car.id}>
          <h2>{car.make} {car.brand}</h2>
          <p>Year: {car.year}</p>
          <p>Price: ${car.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;