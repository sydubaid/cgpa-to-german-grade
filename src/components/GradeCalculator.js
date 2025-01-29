import React, { useState } from 'react';

const GradeCalculator = () => {
  const [cgpa, setCgpa] = useState('');
  const [germanGrade, setGermanGrade] = useState(null);

  const calculateGrade = () => {
    const maxGrade = 10;
    const minGrade = 4;
    const nd = parseFloat(cgpa);

    if (isNaN(nd) || nd < minGrade || nd > maxGrade) {
      alert('Please enter a valid CGPA between 0 and 10.');
      return;
    }

    const x = 1 + 3 * ((maxGrade - nd) / (maxGrade - minGrade));
    setGermanGrade(x.toFixed(1)); // Round to 1 decimal place
  };

  return (
    <div>
      <h1>Indian CGPA to German Grade Converter</h1>
      <div>
        <label htmlFor="cgpa">Enter your CGPA (0-10): </label>
        <input
          type="number"
          id="cgpa"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          min="0"
          max="10"
          step="0.1"
        />
      </div>
      <button onClick={calculateGrade}>Calculate</button>
      {germanGrade !== null && (
        <div>
          <h2>Your German Grade: {germanGrade}</h2>
        </div>
      )}
    </div>
  );
};

export default GradeCalculator;