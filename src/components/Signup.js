import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './Signup.css'; // Assuming you have a separate CSS file
import NavBar from './NavBar';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        image: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('first_name', formData.firstName); // Adjust key as per backend
        formdata.append('surname', formData.surname);
        formdata.append('email', formData.email);
        formdata.append('phone', formData.phone);
        formdata.append('password', formData.password);
        if (formData.image) {
            formdata.append('image', formData.image);
        }
    
        // Debugging the FormData
        for (let pair of formdata.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }
    
        try {
            const response = await axios.post('http://localhost:2020/api/signup', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                alert('User registered successfully!');
            }
        } catch (error) {
            console.error('Error submitting the form:', error.response?.data || error.message);
            alert('An error occurred while submitting the form.');
        }
    };
    
    

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    return (
        <div>
            <NavBar />
            <div className="login-container">
                <h2>Sign Up</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="firstname">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Enter your first name"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="surname">Surname</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            value={formData.surname}
                            onChange={handleChange}
                            placeholder="Enter your surname"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create your password"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="image">Upload Image</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleFileChange}
                        />
                    </div>
                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
