import React, { createContext, useContext, useState } from 'react';

export const InputValueContext = createContext();

export const useInputValue = () => useContext(InputValueContext);

export const InputValueProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState({
    Name: '',
    date: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <InputValueContext.Provider value={{ inputValue, handleChange }}>
      {children}
    </InputValueContext.Provider>
  );
};
