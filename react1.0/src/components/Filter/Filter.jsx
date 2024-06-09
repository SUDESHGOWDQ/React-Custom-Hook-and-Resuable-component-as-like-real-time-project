import PropTypes from "prop-types";
import { useState, useRef } from "react";
import useModal from "../../Hooks/useModal";
import useOutsideClick from "../../Hooks/useOutsideClick"; // Import the useOutsideClick hook
import "./Filter.css";

const Filter = ({ onApply }) => {
  const {
    isOpen: open,
    openModal: openMainModal,
    closeModal: closeMainModal,
  } = useModal();
  const {
    isOpen: subopen,
    openModal: openSubModal,
    closeModal: closeSubModal,
  } = useModal();
  const [selectedOption, setSelectedOption] = useState("");
  const filterDropdownRef = useRef(null); // Create a ref for the filter dropdown

  // Call useOutsideClick hook to handle clicks outside the filter dropdown
  useOutsideClick(filterDropdownRef, () => {
    if (open) {
      closeMainModal();
    }
  });

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleApply = () => {
    onApply(selectedOption);
    closeMainModal();
  };

  const handleFilterIconClick = () => {
    if (open) {
      closeMainModal();
    } else {
      openMainModal();
    }
  };

  const handleFilterIconClicksub = () => {
    if (subopen) {
      closeSubModal();
    } else {
      openSubModal();
    }
  };

  return (
    <div className="Filter" ref={filterDropdownRef}>
      <div className="filter-icon">
        
        <i className="fa-solid fa-filter" onClick={handleFilterIconClick}></i>
      </div>
      {open && (
        <div className="Filter-dropdown">
          <div className="input-dropdown">
            <input
              placeholder="Add sorting"
              className="filter-input"
              type="text"
              value={selectedOption}
              readOnly
            />
            <div onClick={handleFilterIconClicksub}>
              <div className="arrow-btn">
                {subopen ? (
                  <i className="fa-solid fa-circle-down"></i>
                ) : (
                  <i className="fa-solid fa-circle-up"></i>
                )}
              </div>
            </div>
          </div>

          {subopen && (
            <div className="radio-buttons">
              <input
                className="input-radio"
                type="radio"
                value="A to Z"
                checked={selectedOption === "A to Z"}
                onChange={handleRadioChange}
              />
              <label className="radio-label">A to Z</label>
              <br />
              <input
                className="input-radio"
                type="radio"
                value="Z to A"
                checked={selectedOption === "Z to A"}
                onChange={handleRadioChange}
              />
              <label className="radio-label">Z to A</label>
              <br />
              <input
                className="input-radio"
                type="radio"
                value="None"
                checked={selectedOption === "None"}
                onChange={handleRadioChange}
              />
              <label className="radio-label">None</label>
            </div>
          )}
          <div className="filter-btn">
            <button className="filter-btn1" onClick={handleApply}>
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Filter.propTypes = {
  onApply: PropTypes.func.isRequired,
};

export default Filter;
