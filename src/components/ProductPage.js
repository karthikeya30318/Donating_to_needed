import axios from "axios";
import { useState } from "react";
import "./ProductPage.css";

const AddProductForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
    photo: null,
  });
  const [error, setError] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { category, name, description, photo } = formData;

    if (!category || !name || !photo) {
      setError("Please complete all required fields.");
      return;
    }

    // Prepare form data for the API
    const formDataToSend = new FormData();
    formDataToSend.append("category", category);
    formDataToSend.append("name", name);
    formDataToSend.append("description", description || ""); // Optional description
    formDataToSend.append("photo", photo);

    try {
      const response = await axios.post("http://localhost:2020/api/donations", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200 || response.status === 201) {
        const newProduct = response.data;

        // Ensure onAdd is a function before calling it
        if (typeof onAdd === "function") {
          onAdd(newProduct); // Update frontend with the new product
        } else {
          console.error("onAdd is not a function");
        }

        setFormData({ category: "", name: "", description: "", photo: null });
        setPreview(null);
        setError("");
      } else {
        setError("Failed to add donation. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h2>Add a New Donation</h2>
      {error && <p className="error-message">{error}</p>}

      <label>Category (Required)</label>
      <select name="category" value={formData.category} onChange={handleInputChange} required>
        <option value="">Select Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Food">Food</option>
        <option value="Medical">Medical</option>
        <option value="Shelter">Shelter Support</option>
      </select>

      <label>Item Name (Required)</label>
      <input
        type="text"
        name="name"
        value={formData.name}
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

      <button type="submit" className="submit-btn">
        Submit Donation
      </button>
    </form>
  );
};

export default AddProductForm;
