import React from 'react';
import './Input.css';

const Input = ({ label, type, name, value, onChange, error }) => {
  return (
    <section className="input-group">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`input-field ${error ? 'input-field-error' : ''}`}
        aria-invalid={error ? "true" : "false"}
      />
      {error && <span className="error-message">{error}</span>}
    </section>
  );
};

export default Input;