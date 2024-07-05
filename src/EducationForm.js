// EducationForm.js

import React, { useState } from 'react';

function EducationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    graduationYear: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      school: '',
      degree: '',
      graduationYear: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>School:</label>
      <input
        type="text"
        name="school"
        value={formData.school}
        onChange={handleChange}
        required
      />
      <label>Degree:</label>
      <input
        type="text"
        name="degree"
        value={formData.degree}
        onChange={handleChange}
        required
      />
      <label>Graduation Year:</label>
      <input
        type="text"
        name="graduationYear"
        value={formData.graduationYear}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Education</button>
    </form>
  );
}

export default EducationForm;
