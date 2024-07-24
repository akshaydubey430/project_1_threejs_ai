import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyles = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
        width:"150px",
      }
    } else if(type==="outline"){
      return{
        borderWidth:'1px',
        borderColor: snap.color,
        color: snap.color,
        width: '150px',
       
      }
    }
  }

  return (
    <button
      className={` mx-2 px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyles(type)}
      onClick={handleClick} 
    >
      {title}
    </button>
  );
};

export default CustomButton;