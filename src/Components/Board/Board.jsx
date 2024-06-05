import React, { useState } from "react";
import "../Board/Board.css";
import { MoreHorizontal } from "react-feather";
import { Card } from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";

export const Board = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = (event) => {
    event.stopPropagation(); // Prevents the dropdown from closing immediately
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          {props.board?.title} &nbsp;
          <span>{`${props.board?.cards?.length}`}</span>
        </p>
        <div className="board_top_more" onClick={handleDropdownClick}>
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <div className="board_dropdown">
                <p>Delete Board</p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom_scroll">
        {props.board?.cards?.map((item) => (
          <Card key={item.id} card={item} />
        ))}
        <Editable
          displayClass="board_cards_add"
          text="Add Card"
          placeholder="Enter Card Title"
        />
      </div>
    </div>
  );
};
