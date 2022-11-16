import React, { useState } from 'react';

// package
import Select from 'react-select';

const MultipleSelect = () => {
  // dummay Data
  const data = [
    { value: "Travel", label: "Travel" },
    { value: "Dancing", label: "Dancing" },
    { value: "Swimming", label: "Swimming" },
    { value: "Cycling", label: "Cycling" },
    { value: "Football", label: "Football" },
    { value: "Horse Racing", label: "Horse Racing" },
    { value: "Baseball", label: "Baseball" },
    { value: "Cricket", label: "Cricket" },
    { value: "Ice Skating", label: "Ice Skating" },
    { value: "Fishing", label: "Fishing" },
    { value: "Gardening", label: "Gardening" },
    { value: "Running", label: "Running" },
    { value: "Coin Collecting", label: "Coin Collecting" },
    { value: "Art Collecting", label: "Art Collecting" },
    { value: "Coding", label: "Coding" },
    { value: "Cooking", label: "Cooking" },
    { value: "Sewing", label: "Sewing" },
    { value: "Video Games", label: "Video Games" },
    { value: "Genealogy", label: "Genealogy" },
    { value: "Language Learning", label: "Language Learning" },
    { value: "Books Reading", label: "Books Reading" },
    { value: "Playing an Instrument", label: "Playing an Instrument" },
    { value: "Mountain Biking", label: "Mountain Biking" },
    { value: "Listing Songs", label: "Listing Songs" },
    { value: "Movie Viewer", label: "Movie Viewer" },
    { value: "Sing Song", label: "Sing Song" },
    { value: "Other...", label: "Other..." },
  ];

  // set value for default selection
  const [selectedValue, setSelectedValue] = useState([]);

  /**
   *  handle onChange event of the dropdown
   * @param {object} event 
   */
  const handleChange = (event) => {
    setSelectedValue(Array.isArray(event) ? event.map(x => x.value) : []);
  };

  /**
   * handle Add hobbies
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedValue);
    setSelectedValue('');
  };

  // retrun function
  return (
       <div className="App" style={{ width: '500px', height: "700px", marginLeft: "10px" }}>
      <br />
      {/* Selected tag */}
      <Select
        className="dropdown"
        placeholder="Select Your Hobbies"
        value={data.filter(obj => selectedValue.includes(obj.value))}
        options={data}
        onChange={handleChange}
        isMulti
        isClearable
      />
      <br />
      {/* submit button */}
      <button
        className='btn btn-outline-primary'
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default MultipleSelect;