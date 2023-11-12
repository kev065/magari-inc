import React, { useState } from 'react';


const SearchBar = ({ onSearch }) => {
    const [searchParams, setSearchParams] = useState({
        yearOfMake: '',
        brand: '',
        price: '',
        mileage: '',
        make: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({ ...searchParams, [name]: value });
    };

    const handleSearch = () => {
        onSearch(searchParams);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by yearOfMake"
                name="yearOfMake"
                value={searchParams.yearOfMake}
                onChange={handleInputChange}
            />
            <input
                type="text"
                placeholder="Search by brand"
                name="brand"
                value={searchParams.brand}
                onChange={handleInputChange}
            />
            <input
                type="text"
                placeholder="Search by price"
                name="price"
                value={searchParams.price}
                onChange={handleInputChange}
            />
             <input
                type="text"
                placeholder="Search by mileage"
                name="mileage"
                value={searchParams.mileage}
                onChange={handleInputChange}
            />
             <input
                type="text"
                placeholder="Search by make"
                name="make"
                value={searchParams.make}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;

