import React, { useState } from 'react';
import axios from 'axios';

const SellCarForm = () => {
    const [carDetails, setCarDetails] = useState({
        make: '',
        brand: '',
        year: '',
        price: '',
        mileage: '',
        picture: null
    });

    const handleChange = (e) => {
        if (e.target.name === 'picture') {
            setCarDetails({ ...carDetails, picture: e.target.files[0] });
        } else {
            setCarDetails({ ...carDetails, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Uploads the image to Cloudinary and get the URL in db2.json
        const formData = new FormData();
        formData.append('file', carDetails.picture);
        formData.append('upload_preset', 'test_boy_2023'); 
        const res = await axios.post('https://api.cloudinary.com/v1_1/dbh1s3nlh/image/upload', formData); 
        const imageUrl = res.data.secure_url;

        // Send the form data and image URL to json-server
        const carData = { ...carDetails, picture: imageUrl };
        fetch('http://localhost:3000/cars', {
            method: 'POST',
            body: JSON.stringify(carData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        }).then(data => {
            console.log(data);
            // Handle the response data in the UI

            // Show an alert to inform the user that the form has been received
        alert('Your form has been received and is being reviewed.');
        setCarDetails({
          make: '',
          brand: '',
          year: '',
          price: '',
          mileage: '',
          picture: null,
        });
      })
        .catch(error => {
            console.error(error);
            // Handle the error in the UI
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '25px' }}>
                <label>
                    Make:
                    <input type="text" name="make" onChange={handleChange} />
                </label>
            </div>
            <div style={{ marginBottom: '25px' }}>
                <label>
                    Brand:
                    <input type="text" name="brand" onChange={handleChange} />
                </label>
            </div>
            <div style={{ marginBottom: '25px' }}>
                <label>
                    Year of Make:
                    <input type="number" name="year" onChange={handleChange} />
                </label>
            </div>
            <div style={{ marginBottom: '25px' }}>
                <label>
                    Price:
                    <input type="number" name="price" onChange={handleChange} />
                </label>
            </div>
            <div style={{ marginBottom: '25px' }}>
                <label>
                    Mileage:
                    <input type="number" name="mileage" onChange={handleChange} />
                </label>
            </div>
            <div style={{ marginBottom: '25px' }}>
                <label>
                    Picture:
                    <input type="file" name="picture" onChange={handleChange} />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SellCarForm;
