import React, { useState } from "react";
import { createStudent } from "../services/api";

function AddStudent({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    rollNo: "",
    name: "",
    city: "",
    marks: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStudent(formData);
      onAdd();
      onClose();
    } catch (err) {
      alert("Error adding student!");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>➕ Add Student</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="rollNo"
            placeholder="Roll No"
            value={formData.rollNo}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="marks"
            placeholder="Marks"
            value={formData.marks}
            onChange={handleChange}
            required
          />
          <div className="modal-buttons">
            <button type="submit" className="btn-add">Add</button>
            <button type="button" className="btn-delete" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;