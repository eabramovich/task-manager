import React, { useEffect, useState } from 'react';
import IconButton from '../IconButton/IconButton';
import './SelectField.scss';

const SelectField = ({ options, allowMultiple = true }) => {
  const [selectedOptions, setSelectedOptions] = useState([...options]);

  // Удаление выбранного элемента
  const handleRemoveOption = (option) => {
    setSelectedOptions(
      selectedOptions.filter((selected) => selected.id !== option.id)
    );
  };

  const handleClearAll = () => {
    setSelectedOptions([]);
  }

  return (
    <div className="select-field">
      <div className="select-field__wrapper">
        <div className="select-field__all-options">
          {selectedOptions.map((option) => (
            <span key={option.id} className="select-field__selected-option">
              {`${option.name}`}
              {allowMultiple && <button
                type="button"
                aria-label="Удалить"
                onClick={() => handleRemoveOption(option)}
                className="select-field__remove-btn"
              />}
            </span>
          ))}
        </div>

        {selectedOptions.length > 0 && (
          <button
            type="button"
            onClick={handleClearAll}
            className="select-field__clear-btn"
          />
        )}
      </div>
      <IconButton icon="add" />
      <IconButton icon="search" />
    </div>
  );
};

export default SelectField;
