'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FiSearch } from "react-icons/fi";
const SearchFilter = ({items, handleSelect }) => {
  
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const sethandleSelect = (item) => {
        handleSelect(item);
        setSearchTerm('')
    };

    return (
        <div>
            <div className="input-group mb-3 position-relative">
                <span className="search_icons"><FiSearch /> </span>
                <input
                    type="text"
                    className="form-control search_input"
                    placeholder="search gift card..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            {searchTerm && (
                <ul className="dropdown-menu search_bord show cardlisthight">
                    {filteredItems.map((item, index) => (
                        <li key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='d-flex justify-content-between'>
                                <p className='p-0 m-0'><img src={item.image} alt="Item" className="list-image" /> {item.title}</p>
                                {hoveredItem === index && (
                                    <button className='add_btn' onClick={() => sethandleSelect(item)}>Add</button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchFilter;