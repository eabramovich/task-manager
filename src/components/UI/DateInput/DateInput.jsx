import React, { useState } from 'react';
import Input from '../Input/Input';

const DateInput = ({ initialDate }) => {
  const [date, setDate] = useState(initialDate || null);

  return (
    <div className="input-date">
      <div className="input-date__wrapper">
        <Input type="date" className="input-date__input" />
      </div>
    </div>
  );
};

export default DateInput;