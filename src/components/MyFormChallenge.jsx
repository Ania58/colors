import { useState, useRef } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleChange = () => {
    setInputValue(inputRef.current.value.toLowerCase());
  };

  return (
    <>
    <input 
    type="text" 
    placeholder="Choose a color" 
    value={inputValue} 
    onChange={handleChange} 
    ref={inputRef} />
     <div className="container">
        {colors.map((color) => (
          <BoxColor key={color} color={color} value={inputValue} />
        ))}
      </div>
    </>
  );
}

export default MyForm;