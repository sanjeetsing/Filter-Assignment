import React, { useState } from "react";

const Filter = ({ buttonName, dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-component">
      <button onClick={toggleDropdown} className="filter-button">
        {buttonName}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {dropdownContent.map((item, index) => (
            <div key={index} className="dropdown-item">
              <label htmlFor={item.name}>{item.label}</label>
              <input
                type={item.inputType}
                name={item.name}
                placeholder={item.placeholder}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
