import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import { CartContext } from './CartContext';
import Search from './Search';
import "./Cars.css";

function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    fetch('https://kev065.github.io/json-host/magari-inc/db.json')
      .then((response) => response.json())
      .then((data) => {
        setCars(data.cars);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const addToCart = (car) => {
    setCart((prevCart) => [...prevCart, car]);
  };

  return (
    <div className="cars-container">
      <section className="content">
        <CartIcon />
        <Search cars={cars} addToCart={addToCart} />
        <h2>Cars Page</h2>
        <div className="card-container">
          {cars.map((car) => (
            <div key={car.id} className="card">
              <img src={car.image} alt={`${car.make} ${car.brand}`} />
              <h3>{car.make} {car.brand}</h3>
              <p>Year: {car.yearOfMake}</p>
              <p>Price: ${car.price}</p>
              <p>Mileage: {car.mileage} miles</p>
              <Link to={`/cars/${car.id}`}>View Details</Link>
              <button onClick={() => addToCart(car)}>Add to Cart</button>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}

export default Cars;
