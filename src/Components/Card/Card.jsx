import React, { useState } from "react";
import "./Card.css";
import { MoreHorizontal, Clock, CheckSquare } from "react-feather";
import { Chip } from "../Chip/Chip";
import Dropdown from "../Dropdown/Dropdown";

export const Card = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = (event) => {
    event.stopPropagation(); // Prevents the dropdown from closing immediately
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="card">
      <div className="card_top">
        <div className="card_top_labels">
          {props.card?.labels?.map((item, index) => (
            <Chip key={index} text={item.text} color={item.color} />
          ))}
        </div>
        <div className="card_top_more" onClick={handleDropdownClick}>
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <div className="card_dropdown">
                <p>Delete Card</p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="card_title">{props.card?.title}</div>
      <div className="card_footer">
        {
          props.card?.date && 
        <p>
          <Clock />
          {props.card?.date}
        </p>
        }
        <p>
          <CheckSquare /> 
          1/4
        </p>
      </div>
    </div>
  );
};
