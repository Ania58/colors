import React, { useRef, useEffect } from 'react';

function BoxColor ({color, value}) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      // border color = box's color
      boxRef.current.style.borderColor = color;

      if (color === value) {
        
        boxRef.current.style.backgroundColor = color;
        boxRef.current.style.color = 'white';
      } else {
        
        boxRef.current.style.backgroundColor = 'black';
        boxRef.current.style.color = color;
      }
    }
  }, [value, color]);

  return (
    <div ref={boxRef} className={`box ${color}`}>
      <p>{color === value ? `I'm ${color}` : `I'm not ${value || 'a color'}`}</p>
    </div>
  );
}
export default BoxColor;  
