import React from "react";

const Button = ({ buttonInformData }) => {
  return (
    <div>
      <button
        style={{}}
        className={`
  ${buttonInformData.bgColor} 
  ${buttonInformData.textColor} 
  hover:${buttonInformData.txHovering} 
  ${buttonInformData.duration} 
  px-6 py-3 rounded-lg 
  transition ease-in-out 
  cursor-pointer
`.trim()}
      >
        {buttonInformData.value}
      </button>
    </div>
  );
};

export default Button;
