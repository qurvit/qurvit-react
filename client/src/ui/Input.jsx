import React from 'react';

const Input = ({ name, type = 'text', value, placeholder, required = false, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required={required}
    />
  );
};

export default Input;
