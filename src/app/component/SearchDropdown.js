'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MdAddCircle } from 'react-icons/md';
import {RiDeleteBin6Line} from "react-icons/ri";
import './custom.css';


const SearchDropdown = () => {
  const [options, setOptions] = useState([
    { value: 'option1', label: 'Option 1', imageUrl: '../images/cardimg1.png' },
  ]);
  const [inputs, setInputs] = useState([{ price: '', quantity: '' }]);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Options:', options);
    console.log('Inputs:', inputs);
  };

  const handleDropdownChange = (index, event) => {
    const values = [...options];
    values[index].value = event.target.value;
    setOptions(values);
  };

  const handleInputChange = (index, key, event) => {
    const values = [...inputs];
    values[index][key] = event.target.value;
    setInputs(values);
  };

  const handleAddOption = () => {
    setOptions([...options, { value: '', label: '', imageUrl: '' }]);
    setInputs([...inputs, { price: '', quantity: '' }]);
  };

  const handleRemoveOption = (index) => {
    const optionValues = [...options];
    optionValues.splice(index, 1);
    setOptions(optionValues);

    const inputValues = [...inputs];
    inputValues.splice(index, 1);
    setInputs(inputValues);
  };

  const renderOptions = () => {
    return options.map((option, index) => (
      <div key={index} className="input-group mb-3">
        <select
          className="form-select me-2 rounded"
          value={option.value}
          onChange={(event) => handleDropdownChange(index, event)}
        >
          <option value="">Price</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <input
          type="number"
          className="form-control rounded me-2"
          placeholder="Quantity"
          value={inputs[index].quantity}
          onChange={(event) => handleInputChange(index, 'quantity', event)}
        />

        {index > 0 ? <><button
          className='border-0 fs-3 btnbgclr'
          variant="danger"
          onClick={() => handleRemoveOption(index)}
        >
          <RiDeleteBin6Line/>
        </button></> : <>
          <button className='border-0 btnbgclr' onClick={handleAddOption}>
            <MdAddCircle className="fs-2 icon_clr" />
          </button>
        </>

        }
      </div>
    ));
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <div className="row  pb-2 pt-4">
          <div className="col-6">
            <label className="textstyle2">Price variant</label>
          </div>
          <div className="col-6">
            <label className="textstyle2">Quantity</label>
          </div>
        </div>

        {renderOptions()}
        <div className="row">
          <div className="col-6 text-end">
            <label className="frmtxt1">Min: ₹5000.00 Max: ₹10,000.00</label>
          </div>
          <div className="col-6 text-end">
            <label className="frmtxt1 pe-5">Maximum quantity 10</label>
          </div>
        </div>


      </form>
    </div>
  );
};

export default SearchDropdown;