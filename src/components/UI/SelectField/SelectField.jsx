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
            <div key={option.id} className="select-field__selected-option">
              <span className={`select-field__name ${allowMultiple ? "select-field__name_with-btn" : ""}`}>{`${option.name}`}</span>
              {allowMultiple && <button
                type="button"
                aria-label="Удалить"
                onClick={() => handleRemoveOption(option)}
                className="select-field__remove-btn"
              />}
            </div>
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
