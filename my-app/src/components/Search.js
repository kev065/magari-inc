import React, { useState, useEffect } from 'react';

const Search = ({ cars, addToCart }) => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    // Cleanup function to reset searchInput when the component is unmounted
    return () => {
      setSearchInput('');
    };
  }, []);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value.toUpperCase());
  };

  const filterCars = () => {
    if (searchInput) {
      return cars.filter(
        (car) =>
          car.make.toUpperCase().startsWith(searchInput) ||
          car.brand.toUpperCase().startsWith(searchInput)
      );
    } else {
      return []; // Render an empty array if there is no search input
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="searchInput">Search: </label>
        <input
          type="text"
          id="searchInput"
          value={searchInput}
          onChange={handleSearchInput}
        />
      </div>

      <div className="card-container">
        {filterCars().map((car) => (
          <div key={car.id} className="card">
            <img src={car.image} alt={`${car.make} ${car.brand}`} />
            <h3>
              {car.make} {car.brand}
            </h3>
            <p>Year: {car.yearOfMake}</p>
            <p>Price: ${car.price}</p>
            <p>Mileage: {car.mileage} miles</p>
            <button onClick={() => addToCart(car)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;