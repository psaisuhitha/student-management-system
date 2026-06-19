import React, { useState } from "react";
import { updateStudent } from "../services/api";

function EditStudent({ student, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    rollNo: student.rollNo,
    name: student.name,
    city: student.city,
    marks: student.marks
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateStudent(student._id, formData);
      onUpdate();
      onClose();
    } catch (err) {
      alert("Error updating student!");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>✏️ Edit Student</h2>
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
            <button type="submit" className="btn-add">Update</button>
            <button type="button" className="btn-delete" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditStudent;