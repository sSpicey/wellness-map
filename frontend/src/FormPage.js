import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormData } from './FormDataContext';

function FormPage() {
  const navigate = useNavigate();
  const { setFormData } = useFormData();
  const [localFormData, setLocalFormData] = useState({
    preference: '',
    health: '',
    education: '',
    culture: '',
    greenAreas: '',
    busStops: '',
    leastExpensive: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(localFormData);
    navigate('/main');
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Preference for central region?
          <select name="preference" onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="indifferent">Indifferent</option>
          </select>
        </label>
        <br />
        <label>
          Health (0-10)
          <input type="number" name="health" min="0" max="10" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Education (0-10)
          <input type="number" name="education" min="0" max="10" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Culture (0-10)
          <input type="number" name="culture" min="0" max="10" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Green areas (0-10)
          <input type="number" name="greenAreas" min="0" max="10" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Bus stops (0-10)
          <input type="number" name="busStops" min="0" max="10" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Least expensive average square meter (0-10)
          <input
            type="number"
            name="leastExpensive"
            min="0"
            max="10"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Finish</button>
      </form>
    </div>
  );
}

export default FormPage;
