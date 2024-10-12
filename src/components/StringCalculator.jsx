import React, { useState } from "react";
import { add } from "../utils/stringCalculator";

const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="container">
      <h1 className="header">String Calculator</h1>

      <div className="input-group">
        <label className="label">
          Enter numbers (with optional custom delimiter):
        </label>
        <textarea
          className="textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={'Examples:\n1,2,3\n1\\n2,3\n//;\\n1;2'}
          rows={4}
        />
      </div>

      <button className="button" onClick={handleCalculate}>
        Calculate Sum
      </button>

      {result !== null && !error && (
        <div className="result">Result: {result}</div>
      )}

      {error && (
        <div className="error">{error}</div>
      )}

      <div className="section">
        <h2 className="section-title">Instructions:</h2>
        <ul className="list">
          <li>Basic input: Use commas or \n (e.g., "1,2,3" or "1\n2,3")</li>
          <li>Custom delimiter: Start with "//" followed by delimiter and "\n"</li>
          <li>Example with custom delimiter: "//;\n1;2" → 3</li>
          <li>Negative numbers are not allowed</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Test Cases:</h2>
        <ul className="list">
          <li>"" → 0</li>
          <li>"1,2,3" → 6</li>
          <li>"1\n2,3" → 6</li>
          <li>"//;\n1;2" → 3</li>
        </ul>
      </div>
    </div>
  );
};

export default StringCalculator;