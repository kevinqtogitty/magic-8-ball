import React, { FormEvent, useState } from 'react';
import useOptions from '../state/useOptions';

const Form: React.FC = () => {
  const { clearAllOptions, addOption } = useOptions((state) => state);

  const [input, setInput] = useState<string>('');

  const handleInput = (e: any) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const submitOption = (e: FormEvent) => {
    e.preventDefault();
    const inputObject = {
      optionText: input,
      positionEnter: [-2, -3, 0],
      opacity: 0.3
    };
    addOption(inputObject);
    setInput('');
  };

  return (
    <form action="submit" onSubmit={(e) => submitOption(e)}>
      <div className="inputLabel">
        <label htmlFor="input">Option: </label>
        <input
          placeholder="McDonalds"
          onChange={(e) => handleInput(e)}
          value={input}
        />
      </div>
      <div className="buttonWrapper">
        <button type="submit">Add option</button>
        <button onClick={clearAllOptions}>Reset</button>
      </div>
    </form>
  );
};

export default Form;
