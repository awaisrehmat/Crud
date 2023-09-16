import React from "react";
import { Button, IconButton } from "@mui/material";
import "./style.css";

const IconOptions = ({ options, label, selectedOption, onSelectOption }) => {
  return (
    <div className="icon-options">
      {options.map((option, index) => (
        <IconButton
          key={index}
          color="default" // Use the default color for all icons
          className={selectedOption === option.value ? "selected" : ""}
          onClick={() => onSelectOption(option.value)}
        >
          {option.icon} {option.label}
        </IconButton>
      ))}
    </div>
  );
};

export default IconOptions;
