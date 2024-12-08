import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './MainPage.css'; // CSS file for styling the main page

const MainPage = () => {
  const [userName, setUserName] = useState(''); // State for user's name
  const [isSubmitted, setIsSubmitted] = useState(false); // State for form submission
  const navigate = useNavigate(); // Hook to handle navigation

  const handleInputChange = (event) => {
    setUserName(event.target.value); // Update state when input changes
  };

  const handleSubmit = () => {
    if (userName.trim() !== '') {
      setIsSubmitted(true); // Mark the form as submitted
    } else {
      alert('Please enter your name!'); // Validation check
    }
  };

  return (
    <div>
      <div className="main-page-container">
        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome to Donating to Needed</h1>
          <p>Connecting generous donors with those in need. Make a difference today!</p>

          {/* User Input Section */}
          {!isSubmitted ? (
            <div className="user-input">
              <label htmlFor="user-name" className="input-label">
                Enter Your Name:
              </label>
              <input
                type="text"
                id="user-name"
                value={userName}
                onChange={handleInputChange}
                className="user-input-field"
                placeholder="Type your name here"
              />
              <button onClick={handleSubmit} className="submit-button">
                Submit
              </button>
            </div>
          ) : (
            <div className="user-action-buttons">
              <p className="greeting-message">
                Thank you for joining us, <strong>{userName}</strong>! Please choose an option below:
              </p>
              <button
                className="login-button"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className="signup-button"
                onClick={() => navigate('/signup')}
              >
                Signup
              </button>
            </div>
          )}
        </section>

        {/* About Section */}
        <section className="about">
          <h2>About Our Mission</h2>
          <h3>Food</h3>
          <p>This is for food.</p>
          <h3>Clothes</h3>
          <p>Write here about the clothes.</p>
          <h3>Medical</h3>
          <p>Write about medical.</p>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <ul>
            <li>
              <strong>1.</strong> User Roles: <br></br>

Donors: Upload details of items they wish to donate, including photos, descriptions, and categories.
Recipients: Browse or request specific items they need
            </li>
            <li>
              <strong>2.</strong> Homepage Features: <br></br>

Displays an overview of available categories like Food, Shelter, Clothes, and Medical supplies.
Highlights featured or urgent needs.
Includes navigation to donation and request sections.
            </li>
            <li>
              <strong>3.</strong> Donation Process: <br></br>

Users select the type of item they wish to donate (e.g., clothes, food, etc.).
Provide details (description, quantity, condition, and a photo).
Items are listed under respective categories for others to view.
            </li>
            <li>
              <strong>4.</strong> Item Listing: <br></br>  Items are displayed in a categorized format with photos, descriptions, and donor details.
              Recipients can filter by category or search for specific items.
            </li>
            <li>
          <strong>5.</strong> Interactive Features: <br></br>

Upload Option: Allows donors to add new items through a user-friendly form.
List View Option: Displays items that have already been uploaded, organized by categories.
        </li>
            <li>
              <strong>6.</strong> Support Features:<br></br>

Categories like Shelter, Food, Medical, and Clothes offer focused assistance.
Optional features like chat or request buttons enable direct communication between donors and recipients.
            </li>
          </ul>
        </section>
        

        {/* Categories Section */}
        <section className="categories">
          <h2>Donation Categories</h2>
          <div className="category-grid">
            <div className="category-card">Food</div>
            <div className="category-card">Clothing</div>
            <div className="category-card">Medical</div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="success-stories">
          <h2>Our Impact</h2>
          <p>Read about the lives changed through our platform.</p>
          <div className="testimonials">
            <blockquote>"This platform brought hope when I needed it most!"</blockquote>
            <blockquote>"An amazing way to help others directly in our community."</blockquote>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainPage;
