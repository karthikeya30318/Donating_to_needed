import React, { useState } from "react";

const DonationPage = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.type && formData.description) {
      setItems([...items, formData]);
      setFormData({ type: "", description: "", image: null });
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Donate and List Items</h1>

      {/* Upload Section */}
      <div style={{ marginBottom: "30px" }}>
        <h2>Upload Items</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Item Type:</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
            >
              <option value="">Select Type</option>
              <option value="Food">Food</option>
              <option value="Clothes">Clothes</option>
              <option value="Medical">Medical</option>
            </select>
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
            ></textarea>
          </div>
          <div>
            <label>Upload Image:</label>
            <input type="file" onChange={handleImageChange} />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>

      {/* Listing Section */}
      <div>
        <h2>Uploaded Items</h2>
        {items.length === 0 ? (
          <p>No items uploaded yet.</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {items.map((item, index) => (
              <li key={index} style={{ marginBottom: "20px" }}>
                <strong>Type:</strong> {item.type} <br />
                <strong>Description:</strong> {item.description} <br />
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.type}
                    style={{ width: "100px", height: "100px", marginTop: "10px" }}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DonationPage;
