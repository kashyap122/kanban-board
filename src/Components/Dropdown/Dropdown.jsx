import React, { useEffect, useRef } from "react";

const Dropdown = (props) => {
  const DropdownRef = useRef();

  const handleClick = (event) => {
    if (DropdownRef && !DropdownRef.current.contains(event.target)){
        if (props.onClose)props.onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <div ref={DropdownRef} className="dropdown" style={{
        position:"absolute",top:"100%",right:"0"
    }}>
      {props.children}
    </div>
  );
};

export default Dropdown;
