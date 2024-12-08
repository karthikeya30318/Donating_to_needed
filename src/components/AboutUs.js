// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';
import NavBar from './NavBar';

const AboutUs = () => {
  return (<div><NavBar></NavBar>
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Donating Needs to Needed</strong> — a platform created to connect those who have extra resources with those in need. We aim to bring communities together, reduce waste, and provide a way for everyone to contribute positively to society. Our platform allows people to donate items they no longer need or request essential resources, from food and clothing to shelter and basic supplies.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to create a network where kindness and generosity thrive, helping people help each other directly. We believe that everyone has something to offer, and we strive to make it simple for users to give or receive support within their community.
      </p>

      <h2>What You Can Do on Our Platform</h2>
      <ul>
        <li>
          <strong>Donate:</strong> Easily post items you wish to donate, so they can reach individuals or families who need them.
        </li>
        <li>
          <strong>Request Assistance:</strong> If you are in need, browse the available donations or make a request for specific items.
        </li>
        <li>
          <strong>Connect with Your Community:</strong> Learn more about the needs of your community, fostering a spirit of mutual support.
        </li>
      </ul>

      <h2>Benefits of Using Our App</h2>
      <ul>
        <li>Convenient and secure way to donate or receive essentials.</li>
        <li>Helps reduce waste by rehoming items to people who need them.</li>
        <li>Encourages community bonding and direct support.</li>
      </ul>

      <p>
        Join us at <strong>Donating Needs to Needed (DNTN)</strong> and make a meaningful impact in someone's life while supporting a more sustainable, connected world.
      </p>
    </div>
    </div>
  );
};

export default AboutUs;
