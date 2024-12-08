import React, { useState } from 'react';
import './DonationPage.css';

const DonationPage = () => {
    const [formData, setFormData] = useState({
        category: '',
        itemName: '',
        description: '',
        photo: null,
    });
    const [error, setError] = useState('');
    const [preview, setPreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, photo: file });

        if (file) {
            setPreview(URL.createObjectURL(file)); // Set image preview
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { category, itemName, photo } = formData;
        
        if (!category || !itemName || !photo) {
            setError('Please complete all required fields.');
            return;
        }

        setError('');
        // Handle submission logic here (e.g., send data to an API or backend)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="donation-page">
            <div className="donation-container">
                <h2>Donate an Item</h2>
                <p className="donation-description">
                    Your donation can make a big difference! Please fill out the form below to offer support.
                </p>
                <form onSubmit={handleSubmit} className="donation-form">
                    {error && <p className="error-message">{error}</p>}

                    <label>Category (Required)</label>
                    <select name="category" value={formData.category} onChange={handleInputChange} required>
                        <option value="">Select Category</option>
                        <option value="clothing">Clothing</option>
                        <option value="food">Food</option>
                        <option value="Medical">Medical</option>
                        <option value="shelter">Shelter Support</option> {/* New option for Shelter Support */}
                    </select>

                    <label>Item Name (Required)</label>
                    <input
                        type="text"
                        name="itemName"
                        value={formData.itemName}
                        onChange={handleInputChange}
                        placeholder="Enter the name of the item"
                        required
                    />

                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Add a brief description of the item, including the address for better collaboration"
                    ></textarea>

                    <label>Upload Photo (Required)</label>
                    <input
                        type="file"
                        name="photo"
                        onChange={handlePhotoChange}
                        required
                    />
                    {preview && (
                        <div className="image-preview">
                            <img src={preview} alt="Preview" />
                        </div>
                    )}

                    <button type="submit" className="submit-btn">Submit Donation</button>
                </form>
            </div>
        </div>
    );
};

export default DonationPage;
