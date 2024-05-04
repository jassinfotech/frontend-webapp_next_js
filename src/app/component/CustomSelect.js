'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MdAddCircle } from 'react-icons/md';
import {RiDeleteBin6Line} from "react-icons/ri";


const options = [
    { value: '1', label: 'One', imageUrl: 'https://cdn-icons-png.flaticon.com/512/66/66455.png' },
    { value: '2', label: 'Two', imageUrl: '' }, // Add image URL if needed
    { value: '3', label: 'Three', imageUrl: '' }, // Add image URL if needed
  ];
  
  const CustomSelect = () => {
    const [selectedValue, setSelectedValue] = useState('');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    return (
      <div className="custom-select">
        <select className="form-select" aria-label="Default select example" value={selectedValue} onChange={handleChange}>
          <option value="">Open this select menu</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default CustomSelect;