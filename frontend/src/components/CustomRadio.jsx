
// import { FaCheckCircle } from "react-icons/fa"; // Import the icon you want to use
import { useState } from "react";
import { Box } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function CustomRadioButton({ label, icon, value, selectedValue, onChange }) {
  const isSelected = selectedValue === value;

  const handleButtonClick = () => {
    if (!isSelected) {
      onChange(value);
      console.log(value)
    }
  };

  return (
    <Box
    marginLeft={3}
      as="button"
      display="flex"
      alignItems="center"
      p={2}
      borderWidth={isSelected ? "2px" : "1px"}
      borderColor={isSelected ? "green.500" : "gray.300"}
      borderRadius="md"
      fontWeight={isSelected ? "bold" : "normal"}
      backgroundColor={isSelected ? "green.100" : "white"}
      onClick={handleButtonClick}
    >
      
      {isSelected && <Box as={AddCircleIcon} color={isSelected ? "green.500" : "gray.300"} mr={2} />}
      {icon}
      <br />
      {label}
    </Box>
  );
}