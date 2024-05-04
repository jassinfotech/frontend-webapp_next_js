import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
const SearchDropdown = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [isFilterOpen, setIsFilterOpen] = React.useState(true);
    const [filteredOptions, setFilteredOptions] = React.useState([]);
    const options = [
      { value: '1', label: 'Jio', images: 'jio.png' },
      { value: '2', label: 'DTH', images: 'dth.png' },
      { value: '3', label: 'D2H', images: 'screenshot.png' },
      { value: '4', label: 'tatasky', images: 'tatasky.png' },
      { value: '5', label: 'airtel', images: 'atl.png' },
      { value: '6', label: 'sun', images: 'kisspng-sun.png' },
      { value: '6', label: 'Metro Card', images: 'martro.png' },
    ];
  
    React.useEffect(() => {
      setFilteredOptions(options);
    }, []);
  
  
    const handleOptionClick = (option) => {
      setSearchTerm(option.label);
      setFilteredOptions([]);
      setIsFilterOpen(false);
    };
  
    const toggleFilter = () => {
      setIsFilterOpen(!isFilterOpen);
    };
  
    return (
      <>
        <div className="dropdown searchdrop_d">
          <div className='row select_value p-0 m-0 my-4' onClick={toggleFilter}>
            <div className='col-10 d-flex'>
                {searchTerm && <img src={options.find((option) => option.label === searchTerm)?.images} alt={searchTerm} />}
                <h5 className='natworktext_t'> {searchTerm ? <>{searchTerm}</> : <>Select Your Operator</>}</h5>
              </div>
          
            <div className='col-2 text-end'><span onClick={toggleFilter} className='icon_slect_f'> {isFilterOpen  ? <FaAngleUp/> : <FaAngleDown/>  }</span></div>
          </div>
          <div className='drop_box_serch' style={{ display: isFilterOpen ? "block" : "none" }}>
           <ul className="dropdownList">
              {options.map((option) => (
                <li key={option.value} onClick={() => handleOptionClick(option)}>
                  <img src={option.images} alt={option.label} /> {option.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default SearchDropdown;
  