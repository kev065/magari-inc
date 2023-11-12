import React from 'react';
import SearchBar from './SearchBar';
import carsData from './db.json';
const CarApp = () => {
    const handleSearch = (params) => {
        // Filter carsData based on search parameters
        const filteredData = carsData.cars.filter(car => {
            return (
                car.yearOfMake.toString().includes(params.yearOfMake) &&
                car.brand.toLowerCase().includes(params.brand.toLowerCase()) &&
                car.price.toString().includes(params.price)
            );
        });

        // Use the filtered data as needed
        console.log(filteredData);
    };

    return (
        <div>
            <h1>Car App</h1>
            <SearchBar onSearch={handleSearch} />
            {/* Render other components */}
        </div>
    );
};

export default CarApp;
