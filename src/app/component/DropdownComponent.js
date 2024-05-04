'use client'
import React, { useState } from 'react'

const DropdownComponent = ({ options, onChange, isFilterOpen }) => {
   

  return (
   
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ display: isFilterOpen ? "none" : "block" }}>
        {options.map((option) => (
          <a
            key={option.value}
            className="dropdown-item"
            href="#"
            onClick={() => onChange(option)}
          >
            <img src={option.image} alt={option.label} style={{ width: '20px', marginRight: '5px' }} />
            {option.label}
          </a>
        ))}
      </div>
  
  );
};

export default DropdownComponent;
