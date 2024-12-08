import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css'; 
import NavBar from './NavBar'; // Import the NavBar component

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate(); // Initialize navigate

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:2020/api/login', formData);
            if (response.status === 200) {
                alert('Login successful!');
                navigate('/ProductPage'); // Navigate to ProductPage
            }
        } catch (error) {
            console.error('Error during login:', error.response?.data || error.message);
            alert(error.response?.data || 'Login failed. Please try again.');
        }
    };

    return (
        <div>
            {/* Render the NavBar component */}
            <NavBar />
            <div className="login-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
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
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
